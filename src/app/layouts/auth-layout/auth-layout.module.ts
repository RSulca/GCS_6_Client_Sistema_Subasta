import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';

import { NotifierService } from 'src/app/services/notifier.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';
import { RegisterComponent } from 'src/app/pages/auth/register/register.component';
import { PortalModule } from '../../pages/portal/portal.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PortalModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    NotifierService,
    LocalStorageService

  ]
})
export class AuthLayoutModule { }
