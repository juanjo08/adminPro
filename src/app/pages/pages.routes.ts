import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';

const pagesRoutes: Routes = [

// tslint:disable-next-line: no-trailing-whitespace
    {path: '', 
        component: PagesComponent,
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'progress', component: ProgressComponent},
            {path: 'graficas1', component: Graficas1Component},
            {path: 'account-settings', component: AcountSettingsComponent},
            {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
// tslint:disable-next-line: no-trailing-whitespace
    },  
 ];

// tslint:disable-next-line: eofline
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);