import { Routes } from '@angular/router';
import { LoginGuardGuard } from 'src/app/guards/login-guard.guard';
import { AccountComponent } from './account/account.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { HistorialComponent } from './historial/historial.component';
import { HistorialComprasComponent } from './historial-Compras/historial-Compras.component';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { TermsComponent } from './terms-components/terms-components.component';
import { TermsModalComponent } from './terms-components/terms-modal/terms-modal.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HelpComponent } from './help/help.component';

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
    path: 'help',
    component: HelpComponent
  },{
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'catalog',
    component: CatalogoComponent
  },
  {
    path: 'detail',
    component: DetailProductComponent
  },
  {
    path: 'myproducts',
    component: MyProductsComponent
  },
  {
    path: 'history',
    canActivate: [LoginGuardGuard],
    component: HistorialComponent
  },
  {
    path: 'historial-compras',
    canActivate: [LoginGuardGuard],
    component: HistorialComprasComponent
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [LoginGuardGuard],
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
    canActivate: [LoginGuardGuard],
    children: [
      {
        path: '',
        loadChildren: './product-register/product-register.module#ProductRegisterModule'
      }
    ]
  },
];

