import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalLayoutRoutes } from './portal-layout.routing';
import { RouterModule } from '@angular/router';
import { PortalLayoutComponent } from './portal-layout.component';
import { PortalModule } from 'src/app/pages/portal/portal.module';



@NgModule({
  declarations: [
    PortalLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PortalLayoutRoutes),
    PortalModule
  ]
})
export class PortalLayoutModule { }
