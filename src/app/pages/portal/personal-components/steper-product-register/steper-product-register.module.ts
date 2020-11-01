import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//ngx-bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { SteperProductRegisterComponent } from './steper-product-register.component';
import { CategoryComponent } from './category/category.component';
import { PhotosComponent } from './photos/photos.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { ShippingComponent } from './shipping/shipping.component';
import { RouterModule } from '@angular/router';
import { steperProductRegister } from './steper-product-register-routing.module';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { ProductEmiterService } from 'src/app/services/product-emiter.service';



@NgModule({
  declarations: [
    SteperProductRegisterComponent,
    CategoryComponent,
    PhotosComponent,
    ProductDataComponent,
    ShippingComponent,
    ReviewerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(steperProductRegister),
    TooltipModule.forRoot()
  ],
  exports: [
    SteperProductRegisterComponent,
  ],
  providers:[
    ProductEmiterService
  ]
})
export class SteperProductRegisterModule { }
