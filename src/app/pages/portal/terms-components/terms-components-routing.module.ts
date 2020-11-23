import { Routes } from '@angular/router';
import { BuyerTermsComponent } from './buyer-terms/buyer-terms.component';
import { SellerTermsComponent } from './seller-terms/seller-terms.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

export const termsComponents: Routes = [

    { path: 'buyer-terms', component: BuyerTermsComponent },
    { path: 'seller-terms', component: SellerTermsComponent },
    { path: '', component: TermsConditionsComponent }

];