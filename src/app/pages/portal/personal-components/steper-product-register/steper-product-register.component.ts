import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';

@Component({
  selector: 'app-steper-product-register',
  templateUrl: './steper-product-register.component.html',
  styleUrls: ['./steper-product-register.component.css']
})
export class SteperProductRegisterComponent implements OnInit {

  constructor(private router: Router, private productEmiter: ProductEmiterService) { }

  ngOnInit(): void {
  }

  goToCategory() {
    this.router.navigate(['seller/edit/category'])
  }

  goToPhotos() {
    this.router.navigate(['seller/edit/photos'])

  }

  goToData() {
    this.router.navigate(['seller/edit/data'])

  }

  goToShipping() {
    this.router.navigate(['seller/edit/shipping'])

  }

}
