import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountTabComponent } from './account-tab/account-tab.component';
import { AddressTabComponent } from './address-tab/address-tab.component';
import { PaymentTabComponent } from './payment-tab/payment-tab.component';
import { RouterModule } from '@angular/router';
import { accountRoutes } from './account-routing.module';


@NgModule({
  declarations: [
    AccountTabComponent, 
    AddressTabComponent, 
    PaymentTabComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes)
  ]
})
export class AccountModule { }
