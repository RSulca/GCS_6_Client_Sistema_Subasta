import { Routes } from '@angular/router';
import { AccountTabComponent } from './account-tab/account-tab.component';
import { AddressTabComponent } from './address-tab/address-tab.component';
import { ImgProfileTabComponent } from './img-profile-tab/img-profile-tab.component';
import { PaymentTabComponent } from './payment-tab/payment-tab.component';

export const accountRoutes: Routes = [

    { path: 'account-profile', component: AccountTabComponent },
    { path: 'img-profile', component: ImgProfileTabComponent },
    { path: 'address', component: AddressTabComponent },
    { path: 'payment', component: PaymentTabComponent },
    { path: 'account', redirectTo: 'account/account-profile' }

];