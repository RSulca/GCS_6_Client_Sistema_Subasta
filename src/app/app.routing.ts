import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PortalLayoutComponent } from './layouts/portal-layout/portal-layout.component';
import { SupervisorLayoutComponent } from './layouts/supervisor-layout/supervisor-layout.component'
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { SupervisorGuardGuard } from './guards/supervisor-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [AdminGuardGuard],
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: PortalLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/portal-layout/portal-layout.module#PortalLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: SupervisorLayoutComponent,
    children: [
      {
        path: '',
        canActivate: [SupervisorGuardGuard],
        loadChildren: './layouts/supervisor-layout/supervisor-layout.module#SupervisorLayoutModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
