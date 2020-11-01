import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { NotifierService } from 'src/app/services/notifier.service';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/local-storage.service';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  providers: [
    NotifierService,
    LoginService,
    LocalStorageService

  ]
})
export class AuthLayoutModule { }
