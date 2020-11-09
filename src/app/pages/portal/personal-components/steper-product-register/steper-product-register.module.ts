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
import { DropzoneComponent } from '../../product-register/dropzone/dropzone.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    SteperProductRegisterComponent,
    CategoryComponent,
    PhotosComponent,
    ProductDataComponent,
    ShippingComponent,
    ReviewerComponent,
    DropzoneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(steperProductRegister),
    TooltipModule.forRoot(),
    NgxDropzoneModule
  ],
  exports: [
    SteperProductRegisterComponent,
  ],
  providers:[
    ProductEmiterService
  ]
})
export class SteperProductRegisterModule { }
