import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalComponent } from './portal.component';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { RouterModule } from '@angular/router';
import { portalRoutes } from './portal-routing.module';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductRegisterModule } from './product-register/product-register.module';
import { NotifierService } from 'src/app/services/notifier.service';
import { LoginService } from 'src/app/services/login.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterPortalComponent } from './shared-components/footer-portal/footer-portal.component';
import { NavbarPortalComponent } from './shared-components/navbar-portal/navbar-portal.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BuyerTermsComponent } from './terms-components/buyer-terms/buyer-terms.component';
import { SellerTermsComponent } from './terms-components/seller-terms/seller-terms.component';
import { TermsConditionsComponent } from './terms-components/terms-conditions/terms-conditions.component';
import { TermsModalComponent } from './terms-components/terms-modal/terms-modal.component';

@NgModule({
  declarations: [
    PortalComponent,
    HomePortalComponent,
    CatalogoComponent,
    // LoginComponent,
    // RegisterComponent,
    FooterPortalComponent,
    NavbarPortalComponent,
    BuyerTermsComponent,
    SellerTermsComponent,
    TermsConditionsComponent,
    TermsModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(portalRoutes),
    ProductRegisterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule
  ],
  providers: [
    NotifierService,
    LoginService,
    LocalStorageService
  ]
})
export class PortalModule { }
