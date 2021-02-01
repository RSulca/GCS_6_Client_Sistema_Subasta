import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { SupervisorComponent } from '../../pages/admin/supervisor/supervisor.component';
import { ClienteComponent } from '../../pages/admin/cliente/cliente.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { ToastrModule } from 'ngx-toastr';
import { ProductosComponent } from '../../pages/admin/productos/productos.component';
import { ReportCategoryComponent } from 'src/app/pages/admin/report-category/report-category.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DashboardComponent,
    SupervisorComponent,
    ClienteComponent,
    ProductosComponent,
    ReportCategoryComponent
  ]
})

export class AdminLayoutModule {}
