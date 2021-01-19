import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './portal.component';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { RouterModule } from '@angular/router';
import { portalRoutes } from './portal-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductRegisterModule } from './product-register/product-register.module';
import { NotifierService } from 'src/app/services/notifier.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TermsModalComponent } from './terms-components/terms-modal/terms-modal.component';
import { ProductCardComponent } from './shared-components/product-card/product-card.component';
import { ProductCardListComponent } from './shared-components/product-card-list/product-card-list.component';
import { TermsComponent } from './terms-components/terms-components.component';
import { TermsComponentsModule } from './terms-components/terms-components.module';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './account/account.module';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { HistorialComponent } from './historial/historial.component';
import { HistorialComprasComponent } from './historial-Compras/historial-Compras.component';
import { ConfirmDialogComponent } from './personal-components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TimerComponentComponent } from './shared-components/timer-component/timer-component.component';
import { SellerDetailProductComponent } from './seller-detail-product/seller-detail-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FooterPortalComponent } from './shared-components/footer-portal/footer-portal.component';
import { NavbarPortalComponent } from './shared-components/navbar-portal/navbar-portal.component';
import { ConfirmDialog2Component } from './personal-components/comfirm-dialog2/confirm-dialog2.component';

//modulos de terceros
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { ModalModule } from 'ngx-bootstrap/modal';
import { MyProductsComponent } from './my-products/my-products.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { InfoDetailComponent } from './shared-components/info-detail/info-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HelpComponent } from './help/help.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ComponentsModule } from '../../components/components.module';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    PortalComponent,
    HomePortalComponent,
    CatalogoComponent,
    // LoginComponent,
    // RegisterComponent,
    TermsComponent,
    TermsModalComponent,
    ProductRegisterComponent,
    ProductCardComponent,
    ProductCardListComponent,
    AccountComponent,
    HistorialComponent,
    HistorialComprasComponent,
    ConfirmDialogComponent,
    InfoDetailComponent,
    TimerComponentComponent,
    SellerDetailProductComponent,
    DetailProductComponent,
    MyProductsComponent,
    FavoritesComponent,
    HelpComponent,
    FooterPortalComponent,
    NavbarPortalComponent,
    ProductsComponent,
    ConfirmDialog2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(portalRoutes),
    ProductRegisterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    TermsComponentsModule,
    AccountModule,
    MatDialogModule,
    NgxMaterialTimepickerModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    MatProgressSpinnerModule,
    ComponentsModule
  ],
  exports: [
    FooterPortalComponent,
    NavbarPortalComponent,
  ],
  providers: [
    NotifierService,
    LocalStorageService
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class PortalModule { }
