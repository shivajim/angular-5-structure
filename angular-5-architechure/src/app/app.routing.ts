import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component'

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './dashboard/project/project.component';


import { AuthGuard } from './shared';

const routes: Routes = [
    {   path: '', component: AuthComponent },
    {   path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        canActivate: [AuthGuard]
    },
    {   path: 'profile/:username', component: ProfileComponent, canActivate: [AuthGuard] },
    {   path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }
