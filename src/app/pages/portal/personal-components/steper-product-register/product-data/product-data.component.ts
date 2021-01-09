import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/services/notifier.service';
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


  constructor(private router: Router, private productEmiter: ProductEmiterService, private fb: FormBuilder, private nf: NotifierService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.productEmiter.categorySubjectChanged$.subscribe(data => this.categorySelected = data);
    this.getCategoryForm(this.categorySelected);

    if(localStorage.getItem('productoMod')){
      this.productEmiter.descriptionSubjectChanged$.subscribe(data=>{
        this.columns.patchValue(data)
      });
      
    }

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
  }


  goToShipping() {
    if (this.columns.invalid) {
      this.nf.notification("warning", {
        'title': 'Formulario invalido.',
        'description': 'Por complete todos los datos de necesarios de su producto.'
      });
    } else {
      this.productEmiter.addDescription(this.columns.value);
      this.router.navigate(['seller/edit/shipping']);
    }

  }

  get columns(): FormArray {
    return this.descriptionForm.get('columns') as FormArray;
  }
}
