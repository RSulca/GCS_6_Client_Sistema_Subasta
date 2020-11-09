import { Routes } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { BuyerTermsComponent } from './terms-components/buyer-terms/buyer-terms.component';
import { SellerTermsComponent } from './terms-components/seller-terms/seller-terms.component';
import { TermsConditionsComponent } from './terms-components/terms-conditions/terms-conditions.component';
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
    path: 'buyer-terms',
    component: BuyerTermsComponent
  },
  {
    path: 'seller-terms',
    component: SellerTermsComponent
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent
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

