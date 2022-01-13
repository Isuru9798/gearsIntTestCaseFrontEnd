import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeComponent } from './components/home/home.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { httpInterceptProviders } from './http-interceptors';
import { NavigationItem } from './layout/navigation';
import { HomeService } from './services/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    DashboardModule,
    HttpClientModule,
    DataTablesModule,
  ],
  providers: [
    HomeService,
    NavigationItem,
    httpInterceptProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
