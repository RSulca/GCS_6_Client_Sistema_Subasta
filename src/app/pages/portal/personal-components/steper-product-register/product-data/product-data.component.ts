import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {

  constructor(private router: Router,private productEmiter: ProductEmiterService) { }

  ngOnInit(): void {
  }

  goToShipping() {
    this.router.navigate(['seller/edit/shipping']);
  }

}
