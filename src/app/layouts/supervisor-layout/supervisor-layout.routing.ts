import { Routes } from '@angular/router';

import { SupervisorDashboardComponent } from '../../pages/supervisor/supervisor-dashboard/supervisor-dashboard.component';
import { SupervisorPerfilComponent } from '../../pages/supervisor/supervisor-perfil/supervisor-perfil.component';
import { SupervisorProductoComponent } from '../../pages/supervisor/supervisor-producto/supervisor-producto.component';

export const SupervisorLayoutRoutes: Routes = [
    { path: 'supervisor',      component: SupervisorDashboardComponent },
    { path: 'supervisor/perfil',      component: SupervisorPerfilComponent },
    { path: 'supervisor/productos', component: SupervisorProductoComponent }
];

