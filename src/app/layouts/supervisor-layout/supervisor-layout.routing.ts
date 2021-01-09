import { Routes } from '@angular/router';

import { SupervisorDashboardComponent } from '../../pages/supervisor/supervisor-dashboard/supervisor-dashboard.component';
import { SupervisorPerfilComponent } from '../../pages/supervisor/supervisor-perfil/supervisor-perfil.component';
import { SupervisorProductoComponent } from '../../pages/supervisor/supervisor-producto/supervisor-producto.component';
import { SupervisorProductoHistorialComponent } from '../../pages/supervisor/supervisor-producto-historial/supervisor-producto-historial.component';

export const SupervisorLayoutRoutes: Routes = [
    { path: 'supervisor',      component: SupervisorDashboardComponent },
    { path: 'supervisor/perfil',      component: SupervisorPerfilComponent },
    { path: 'supervisor/productos', component: SupervisorProductoComponent },
    { path: 'supervisor/productos/historial', component: SupervisorProductoHistorialComponent }
];

