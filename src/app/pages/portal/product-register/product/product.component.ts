import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //states views
  viewCategories: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  seeCategories() {
    this.viewCategories = true;
  }

}
