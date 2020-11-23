import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { PhotosComponent } from './photos/photos.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { ShippingComponent } from './shipping/shipping.component';

export const steperProductRegister: Routes = [

  { path: 'category', component: CategoryComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'data', component: ProductDataComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'reviewer', component: ReviewerComponent },


];