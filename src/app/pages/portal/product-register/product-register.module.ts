import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRegisterComponent } from './product-register.component';
import { RouterModule } from '@angular/router';
import { productRegisterRoutes } from './product-register-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SteperProductRegisterModule } from '../personal-components/steper-product-register/steper-product-register.module';


@NgModule({
  declarations: [
    ProductRegisterComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRegisterRoutes),
    SteperProductRegisterModule
  ]
})
export class ProductRegisterModule { }
