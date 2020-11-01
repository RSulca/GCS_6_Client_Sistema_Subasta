import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  //states views
  viewCategories: boolean = false;

  constructor(private router: Router, private productEmiter: ProductEmiterService) { }

  ngOnInit(): void {
  }

  seeCategories() {
    this.viewCategories = true;
  }

  goToPhotos() {
    this.router.navigate(['seller/edit/photos'])
  }

}
