import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';
import { DashboardUsuarios } from './pages/admin/dashboard-usuarios/dashboard-usuarios';
import { DashboardEstadisticas } from './pages/admin/dashboard-estadisticas/dashboard-estadisticas';
import { AdminGuard } from './guard/admin-guard';

export const routes: Routes = [
    {path: "login", component: Login},
    {path: "register", component: Register},
    {path: "profile", component: Profile},
    {path: "admin", component: DashboardUsuarios, canActivate: [AdminGuard]},
    {path: "stats", component: DashboardEstadisticas , canActivate: [AdminGuard]},
    {path: "", component: Home},
    { path: '**', redirectTo: '' },
];
