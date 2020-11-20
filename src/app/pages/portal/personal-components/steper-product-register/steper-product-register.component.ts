import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';


@Component({
  selector: 'app-steper-product-register',
  templateUrl: './steper-product-register.component.html',
  styleUrls: ['./steper-product-register.component.css']
})
export class SteperProductRegisterComponent implements OnInit {

  categorySelected: any = ''

  //---Emitter
  previweImages: any[] = [];
  imagenTemp: any;
  categoryTemp: any = '';
  descripctionData: any = '';
  shippingData: any = '';


  constructor(private router: Router, private categoryEmitter: ProductEmiterService) { }

  ngOnInit(): void {
    this.categoryEmitter.categorySubjectChanged$.subscribe(data => {
      this.categorySelected = data;
    })

    this.categoryEmitter.categorySubjectChanged$.subscribe(data => {
      this.categoryTemp = data;
    });
    this.categoryEmitter.filesSubjectChanged$.subscribe(data => {
      this.previweImages = data;
    });
    this.categoryEmitter.descriptionSubjectChanged$.subscribe(data => {
      this.descripctionData = data;
    });
    this.categoryEmitter.shippingSubjectChanged$.subscribe(data => {
      this.shippingData = data;
    })
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
