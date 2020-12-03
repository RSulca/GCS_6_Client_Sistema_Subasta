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
import { SupervisorProductoDetalleComponent } from '../../pages/supervisor/supervisor-producto-detalle/supervisor-producto-detalle.component';
import { SupervisorProductoRechazoDetalleComponent } from '../../pages/supervisor/supervisor-producto-rechazo-detalle/supervisor-producto-rechazo-detalle.component';
import { SupervisorProductoSubsanarDetalleComponent } from '../../pages/supervisor/supervisor-producto-subsanar-detalle/supervisor-producto-subsanar-detalle.component';
import { SupervisorProductoHistorialComponent } from '../../pages/supervisor/supervisor-producto-historial/supervisor-producto-historial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SupervisorLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    NgImageSliderModule
  ],
  declarations: [
    SupervisorDashboardComponent,
    SupervisorPerfilComponent,
    SupervisorProductoComponent,
    SupervisorProductoDetalleComponent,
    SupervisorProductoRechazoDetalleComponent,
    SupervisorProductoSubsanarDetalleComponent,
    SupervisorProductoHistorialComponent
  ],
  entryComponents: [
    SupervisorProductoDetalleComponent, 
    SupervisorProductoRechazoDetalleComponent, 
    SupervisorProductoSubsanarDetalleComponent
  ]
})
export class SupervisorLayoutModule {}
