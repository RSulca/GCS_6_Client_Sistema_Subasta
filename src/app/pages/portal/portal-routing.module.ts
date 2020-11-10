import { Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { TermsComponent } from './terms-components/terms-components.component';
import { TermsModalComponent } from './terms-components/terms-modal/terms-modal.component';


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
    path: 'terms-conditions',
    component: TermsComponent,
    children: [
      {
        path: '',
        loadChildren: './terms-components/terms-components.module#TermsComponentsModule'
      }
    ]
  },
  {
    path: 'terms-modal',
    component: TermsModalComponent
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

