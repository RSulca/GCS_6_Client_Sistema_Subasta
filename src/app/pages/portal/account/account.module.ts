import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTabComponent } from './account-tab/account-tab.component';
import { AddressTabComponent } from './address-tab/address-tab.component';
import { PaymentTabComponent } from './payment-tab/payment-tab.component';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './account-routing.module';
import { ImgProfileTabComponent } from './img-profile-tab/img-profile-tab.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NotifierService } from 'src/app/services/notifier.service';
import { UserService } from 'src/app/services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AccountTabComponent,
    AddressTabComponent,
    PaymentTabComponent,
    ImgProfileTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes),
    NgxDropzoneModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    NotifierService,
    UserService
  ]
})
export class AccountModule { }
