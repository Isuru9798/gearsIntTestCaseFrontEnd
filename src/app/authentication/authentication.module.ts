import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthSigninComponent } from './components/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './components/auth-signup/auth-signup.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthenticationComponent } from './authentication.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationService } from './services/authentication.service';



@NgModule({
  declarations: [
    AuthSigninComponent,
    AuthSignupComponent,
    AdminLoginComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
