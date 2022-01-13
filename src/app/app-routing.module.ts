import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AdminLoginComponent } from './authentication/components/admin-login/admin-login.component';
import { AuthSigninComponent } from './authentication/components/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './authentication/components/auth-signup/auth-signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RedirectGuard } from './guard/redirect.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
