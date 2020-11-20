import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

export const productRegisterRoutes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'edit', component: ProductDetailComponent,
    children: [
      {
        path: '',
        loadChildren: '../personal-components/steper-product-register/steper-product-register.module#SteperProductRegisterModule'
      }
    ]
  }
];


