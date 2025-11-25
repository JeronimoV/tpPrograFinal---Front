import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Home } from './pages/home/home';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    {path: "login", component: Login},
    {path: "register", component: Register},
    {path: "profile", component: Profile},
    {path: "admin", component: Profile},
    {path: "", component: Home},
    { path: '**', redirectTo: '' },
];
