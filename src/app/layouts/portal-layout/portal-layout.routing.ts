import { Routes } from '@angular/router';
import { LoginGuardGuard } from 'src/app/guards/login-guard.guard';
import { HomeComponent } from 'src/app/pages/portal/home/home.component';
import { SteperProductRegisterComponent } from 'src/app/pages/portal/personal-components/steper-product-register/steper-product-register.component';
import { ProductDetailComponent } from 'src/app/pages/portal/product-detail/product-detail.component';
import { ProductComponent } from 'src/app/pages/portal/product/product.component';

export const PortalLayoutRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'seller', component: ProductComponent },
    {
        path: 'seller/edit', component: ProductDetailComponent,
        children: [
            {
                path: '',
                loadChildren: './../../pages/portal/personal-components/steper-product-register/steper-product-register.module#SteperProductRegisterModule'
            }
        ]
    }

];

