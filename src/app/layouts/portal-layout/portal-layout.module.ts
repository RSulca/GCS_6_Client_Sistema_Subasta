import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalLayoutRoutes } from './portal-layout.routing';
import { RouterModule } from '@angular/router';
import { PortalLayoutComponent } from './portal-layout.component';
import { HomeComponent } from 'src/app/pages/portal/home/home.component';



@NgModule({
  declarations: [
    PortalLayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PortalLayoutRoutes)

  ]
})
export class PortalLayoutModule { }
