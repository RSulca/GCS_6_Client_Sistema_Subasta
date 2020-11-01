import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalLayoutRoutes } from './portal-layout.routing';
import { RouterModule } from '@angular/router';
import { PortalLayoutComponent } from './portal-layout.component';
import { HomeComponent } from 'src/app/pages/portal/home/home.component';
import { ProductComponent } from 'src/app/pages/portal/product/product.component';
import { ProductDetailComponent } from 'src/app/pages/portal/product-detail/product-detail.component';
import { SteperProductRegisterModule } from 'src/app/pages/portal/personal-components/steper-product-register/steper-product-register.module';



@NgModule({
  declarations: [
    PortalLayoutComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PortalLayoutRoutes),
    SteperProductRegisterModule

  ]
})
export class PortalLayoutModule { }
