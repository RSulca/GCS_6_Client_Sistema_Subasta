import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { SupervisorComponent } from '../../pages/admin/supervisor/supervisor.component';
import { ClienteComponent } from '../../pages/admin/cliente/cliente.component';
import { ProductosComponent } from '../../pages/admin/productos/productos.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'admin', component: DashboardComponent },
    { path: 'admin/supervisores', component: SupervisorComponent },
    { path: 'admin/clientes', component: ClienteComponent },
    { path: 'admin/productos', component: ProductosComponent }
];
