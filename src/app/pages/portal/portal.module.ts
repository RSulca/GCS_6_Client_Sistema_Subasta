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
import { TermsModalComponent } from './terms-components/terms-modal/terms-modal.component';
import { ProductCardComponent } from './shared-components/product-card/product-card.component';
import { ProductCardListComponent } from './shared-components/product-card-list/product-card-list.component';
import { TermsComponent } from './terms-components/terms-components.component';
import { TermsComponentsModule } from './terms-components/terms-components.module';
import { AccountComponent } from './account/account.component';
import { AccountModule } from './account/account.module';
import { AyudaComponent } from './ayuda/ayuda.component';

@NgModule({
  declarations: [
    PortalComponent,
    HomePortalComponent,
    CatalogoComponent,
    // LoginComponent,
    // RegisterComponent,
    FooterPortalComponent,
    NavbarPortalComponent,
    TermsComponent,
    TermsModalComponent,
    ProductCardComponent,
    ProductCardListComponent,
    AccountComponent,
    AyudaComponent
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
    AccountModule
  ],
  exports:[
    FooterPortalComponent,
    NavbarPortalComponent
  ],
  providers: [
    NotifierService,
    LoginService,
    LocalStorageService
  ]
})
export class PortalModule { }
