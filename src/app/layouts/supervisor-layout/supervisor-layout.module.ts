import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { SupervisorLayoutRoutes } from './supervisor-layout.routing';
import { SupervisorDashboardComponent } from '../../pages/supervisor/supervisor-dashboard/supervisor-dashboard.component';
import { SupervisorPerfilComponent } from '../../pages/supervisor/supervisor-perfil/supervisor-perfil.component';
import { SupervisorProductoComponent } from '../../pages/supervisor/supervisor-producto/supervisor-producto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SupervisorLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    SupervisorDashboardComponent,
    SupervisorPerfilComponent,
    SupervisorProductoComponent
  ]
})
export class SupervisorLayoutModule {}
