import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('') data: any;
  subasta: any = {};
  image: any = null;
  image2: any = null;

  constructor(private router:Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.subasta = this.data;
      this.image = this.data['producto'].imgs[0];
      this.image2 = this.data['producto'].imgs[1];
    }, 500);
  }

  goToBuyer(subasta:any){

    this.router.navigate(['/buyer',subasta._id])
  }


}
