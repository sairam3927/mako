import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { OtpResetPasswordComponent } from './login/otp-reset-password/otp-reset-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { DashboardComponent } from './analytics/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'mako',
        component: LayoutComponent, children: [
<<<<<<< HEAD
            { path: '', redirectTo: 'billing', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent, loadChildren: './analytics/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'patients', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: '' } },
            { path: 'billing', loadChildren: './billing/billing.module#BillingModule', data: { breadcrumb: 'Setup' } },
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', data: { breadcrumb: '' } },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' } },
=======
            { path: '', redirectTo: 'billing', pathMatch: 'full'},
            { path: 'dashboard',component:DashboardComponent, loadChildren: './analytics/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' }},
            { path: 'patients', loadChildren: './analytics/analytics.module#AnalyticsModule', data: { breadcrumb: '' }},
            { path: 'billing', loadChildren: './billing/billing.module#BillingModule', data: { breadcrumb: 'Setup' }},
            { path: 'reports', loadChildren: './reports/reports.module#ReportsModule', data: { breadcrumb: '' }},
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule', data: { breadcrumb: 'Admin' }},
>>>>>>> 3fc341966cdf69c51ae494e40fbf524f39425ef5
            // { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule', data: { breadcrumb: 'Calendar'}}
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, data: { breadcrumb: 'Login' } },
    { path: 'register', component: RegisterComponent, data: { breadcrumb: 'Register' } },
    { path: 'forgotPassword', component: ForgotPasswordComponent, data: { breadcrumb: 'Forgot Password' } },
    { path: 'otp', component: OtpResetPasswordComponent, data: { breadcrumb: 'otp' } },
    { path: 'reset', component: ResetPasswordComponent, data: { breadcrumb: 'Reset' } },
    { path: '**', component: NotFoundComponent, data: { breadcrumb: 'Not found' } }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
<<<<<<< HEAD
    preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    useHash: true
=======
   preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
   useHash: true
>>>>>>> 3fc341966cdf69c51ae494e40fbf524f39425ef5
});
