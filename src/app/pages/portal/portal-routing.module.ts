import { Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AyudaComponent } from './ayuda/ayuda.component';
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
    path: 'ayuda',
    component: AyudaComponent
  },
  {
    path: 'catalog',
    component: CatalogoComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    children: [
      {
        path: '',
        loadChildren: './account/account.module#AccountModule'
      }
    ]
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

