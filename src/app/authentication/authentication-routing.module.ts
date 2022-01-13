import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedirectGuard } from '../guard/redirect.guard';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthSigninComponent } from './components/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  },
  {
    canActivate: [RedirectGuard],
    path: 'signup',
    component: AuthSignupComponent,
  },
  {
    path: 'signin',
    canActivate: [RedirectGuard],
    component: AuthSigninComponent
  },
  {
    path: 'admin-signin',
    canActivate: [RedirectGuard],
    component: AdminLoginComponent
  },
  {
    path: '**',
    canActivate: [RedirectGuard],
    component: AuthSignupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
