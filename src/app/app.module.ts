import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { CommonServiceService } from './services/common-service.service';
import { HomeComponent } from './components/home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { httpInterceptProviders } from './http-interceptors';
import { NavigationItem } from './layout/navigation';
import { HomeService } from './services/home.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    DashboardModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule
  ],
  providers: [
    HomeService,
    NavigationItem,
    CommonServiceService,
    httpInterceptProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
