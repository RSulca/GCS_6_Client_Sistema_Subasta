import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-detail-product',
  templateUrl: './seller-detail-product.component.html',
  styleUrls: ['./seller-detail-product.component.css']
})
export class SellerDetailProductComponent implements OnInit {

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: true
  }

  infoAuction: object = {
    endAuction: '2020-12-31 05:00:00'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
