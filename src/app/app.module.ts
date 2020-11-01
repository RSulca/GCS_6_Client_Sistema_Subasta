import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { NavbarPortalComponent } from './pages/shared/navbar-portal/navbar-portal.component';
import { FooterPortalComponent } from './pages/shared/footer-portal/footer-portal.component';
import { RegistroPortalComponent } from './pages/portal/registro-portal/registro-portal.component';
import { RegistroModalPortalComponent } from './pages/portal/registro-modal-portal/registro-modal-portal.component';
import { HomePortalComponent } from './pages/portal/home-portal/home-portal.component';
import { CategoriaModalComponent } from './pages/portal/categoria-modal/categoria-modal.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    NavbarPortalComponent,
    FooterPortalComponent,
    RegistroPortalComponent,
    RegistroModalPortalComponent,
    HomePortalComponent,
    CategoriaModalComponent
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
