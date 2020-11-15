import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingData: any = '';
  recoger: boolean = false;

  constructor(private router: Router, private productEmiter: ProductEmiterService) { }

  ngOnInit(): void {
  }

  goToReview() {
    this.productEmiter.addShiping({
      'dataShipping': this.shippingData,
      'recoger': this.recoger
    });
    this.router.navigate(['seller/edit/reviewer'])
  }

  onChange(e) {
    this.shippingData = e;
  }
}
