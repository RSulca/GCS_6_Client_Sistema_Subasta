import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent }
];
