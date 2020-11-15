import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categorySelected: any = '';
  categories: any[] = [];

  //states views
  viewCategories: boolean = false;

  constructor(private router: Router, private productEmiter: ProductEmiterService,
    private categoriesService: CategoriaService) { }

  ngOnInit(): void {
    this.getCategories();
    this.productEmiter.categorySubjectChanged$.subscribe(data => this.categorySelected = data)
  }

  seeCategories() {
    this.viewCategories = true;
  }

  goToPhotos() {
    this.router.navigate(['seller/edit/photos'])
  }

  getCategories() {
    this.categoriesService.obtenerCategoria().subscribe((data: any) => this.categories = data.categories)
  }

  onChange(e) {
    this.categorySelected = e;
    this.productEmiter.addCategory(this.categorySelected);
  }

  selectCategoryByImg(category: any) {
    this.productEmiter.addCategory(category.name)
    this.viewCategories = false;

  }

}
