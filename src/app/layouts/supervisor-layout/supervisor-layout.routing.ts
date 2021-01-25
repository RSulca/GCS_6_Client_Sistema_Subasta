import { Routes } from '@angular/router';

import { SupervisorDashboardComponent } from '../../pages/supervisor/supervisor-dashboard/supervisor-dashboard.component';
import { SupervisorPerfilComponent } from '../../pages/supervisor/supervisor-perfil/supervisor-perfil.component';
import { SupervisorProductoComponent } from '../../pages/supervisor/supervisor-producto/supervisor-producto.component';
import { SupervisorProductoHistorialComponent } from '../../pages/supervisor/supervisor-producto-historial/supervisor-producto-historial.component';
import { SupervisorProductoReporteComponent } from '../../pages/supervisor/supervisor-producto-reporte/supervisor-producto-reporte.component';

export const SupervisorLayoutRoutes: Routes = [
    { path: 'supervisor',      component: SupervisorDashboardComponent },
    { path: 'supervisor/perfil',      component: SupervisorPerfilComponent },
    { path: 'supervisor/productos', component: SupervisorProductoComponent },
    { path: 'supervisor/productos/historial', component: SupervisorProductoHistorialComponent },
    { path: 'supervisor/productos/reporte', component: SupervisorProductoReporteComponent },
];

