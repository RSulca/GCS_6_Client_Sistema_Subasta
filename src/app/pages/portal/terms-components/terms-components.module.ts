import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerTermsComponent } from './buyer-terms/buyer-terms.component';
import { SellerTermsComponent } from './seller-terms/seller-terms.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { RouterModule } from '@angular/router';
import { termsComponents } from './terms-components-routing.module';

@NgModule({
  declarations: [
    BuyerTermsComponent, 
    SellerTermsComponent, 
    TermsConditionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(termsComponents)
  ]
})
export class TermsComponentsModule { }