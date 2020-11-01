import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SteperProductRegisterComponent } from './steper-product-register.component';
import { CategoryComponent } from './category/category.component';
import { PhotosComponent } from './photos/photos.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { ShippingComponent } from './shipping/shipping.component';
import { RouterModule } from '@angular/router';
import { steperProductRegister } from './steper-product-register-routing.module';


@NgModule({
  declarations: [
    SteperProductRegisterComponent,
    CategoryComponent,
    PhotosComponent,
    ProductDataComponent,
    ShippingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(steperProductRegister)
  ],
  exports: [
    SteperProductRegisterComponent,
  ]
})
export class SteperProductRegisterModule { }
