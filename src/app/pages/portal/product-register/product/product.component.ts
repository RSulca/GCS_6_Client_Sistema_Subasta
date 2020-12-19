import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { NotifierService } from 'src/app/services/notifier.service';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  categories: any[] = [];
  categorySelected: any = '';

  //states views
  viewCategories: boolean = false;


  constructor(private categoryService: CategoriaService, private router: Router,
    private categoryEmitter: ProductEmiterService, private nf: NotifierService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.obtenerCategoria().subscribe((data: any) => {
      this.categories = data.categories;
    })
  }

  seeCategories() {
    this.viewCategories = true;
  }

  goToSellerEdit() {
    if (this.categorySelected === 0 || !this.categorySelected) {
      this.nf.notification("warning", {
        'title': 'Formulario invalido.',
        'description': 'Por favor seleccione una categoria.'
      });
    } else {
      this.categoryEmitter.addCategory(this.categorySelected)
      this.router.navigate(['seller/edit/category'])
    }
  }

  onChange(e) {
    this.categorySelected = e;
  }

  selectCategoryByImg(category: any) {
    this.categoryEmitter.addCategory(category.name)
    this.router.navigate(['seller/edit/category'])
  }


}
