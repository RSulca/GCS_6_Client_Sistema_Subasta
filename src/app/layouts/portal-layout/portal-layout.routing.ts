import { Routes } from '@angular/router';
import { PortalComponent } from 'src/app/pages/portal/portal.component';

export const PortalLayoutRoutes: Routes = [
    {
        path: '',
        component: PortalComponent,
        loadChildren: '../../pages/portal/portal.module#PortalModule'
    }
];

