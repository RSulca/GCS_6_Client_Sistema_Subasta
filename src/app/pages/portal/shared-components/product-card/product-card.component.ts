import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('') data: any;
  subasta: any = {};
  image: any = null;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.subasta = this.data;
      this.image = this.data.producto.imgs[0];
    }, 500);
  }

}
