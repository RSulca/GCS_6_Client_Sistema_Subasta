import { Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { ProductRegisterComponent } from './product-register/product-register.component';

export const portalRoutes: Routes = [
  {
    path: '',
    component: HomePortalComponent
  },
  {
    path: 'home',
    component: HomePortalComponent
  },
  {
    path: 'catalog',
    component: CatalogoComponent
  },
  {
    path: 'seller',
    component: ProductRegisterComponent,
    children: [
      {
        path: '',
        loadChildren: './product-register/product-register.module#ProductRegisterModule'
      }
    ]
  },
];
