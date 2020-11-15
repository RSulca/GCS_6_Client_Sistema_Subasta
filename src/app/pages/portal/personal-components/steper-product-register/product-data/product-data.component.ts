import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';
import { CATEGORIES_FORMS } from '../../../../../util/info-category';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {

  categorySelected: any[] = [];
  categoryFormSelected: any = {};

  descriptionForm: FormGroup;


  constructor(private router: Router, private productEmiter: ProductEmiterService, private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    this.productEmiter.categorySubjectChanged$.subscribe(data => this.categorySelected = data);
    this.getCategoryForm(this.categorySelected);

  }

  initForm() {
    this.descriptionForm = this.fb.group({
      columns: this.fb.array([]),
    });
  }

  getCategoryForm(categorySelected: any) {
    CATEGORIES_FORMS.forEach(c => {
      if (c.nombre === categorySelected) {
        this.categoryFormSelected = c;
      }
    });
    this.generateCategoryForm(this.categoryFormSelected);
    console.log(this.categoryFormSelected)

  }

  generateCategoryForm(categorySelected: any) {
    const fields = categorySelected.campos;
    const quantity = fields.length;
    fields.forEach(f => {
      const field = this.fb.group({
        [f]: ['', Validators.required]
      })
      this.columns.push(field);
    })
    console.log(this.columns.value)
  }


  goToShipping() {
    console.log(this.columns.value)
    this.productEmiter.addDescription(this.columns.value);
    this.router.navigate(['seller/edit/shipping']);
  }

  get columns(): FormArray {
    return this.descriptionForm.get('columns') as FormArray;
  }
}
