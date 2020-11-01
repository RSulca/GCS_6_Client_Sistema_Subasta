import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(private router: Router,private productEmiter: ProductEmiterService) { }

  ngOnInit(): void {
  }

  goToReview() {
    this.router.navigate(['seller/edit/reviewer'])
  }
}
