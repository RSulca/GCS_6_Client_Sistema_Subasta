import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
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
    private categoryEmitter: ProductEmiterService) { }

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
    this.categoryEmitter.addCategory(this.categorySelected)
    console.log(this.categorySelected)
    this.router.navigate(['seller/edit'])
  }

  onChange(e) {
    this.categorySelected = e;
  }

  selectCategoryByImg(category: any) {
    this.categoryEmitter.addCategory(category.name)
    this.router.navigate(['seller/edit'])
  }


}
