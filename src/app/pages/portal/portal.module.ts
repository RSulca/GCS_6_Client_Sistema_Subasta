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
import { ClienteCompletarComponent } from './cliente-completar/cliente-completar.component';

@NgModule({
  declarations: [
    PortalComponent,
    HomePortalComponent,
    CatalogoComponent,
    // LoginComponent,
    // RegisterComponent,
    FooterPortalComponent,
    NavbarPortalComponent,
    ClienteCompletarComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(portalRoutes),
    ProductRegisterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    NotifierService,
    LoginService,
    LocalStorageService
  ]
})
export class PortalModule { }
