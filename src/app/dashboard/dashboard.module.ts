import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminModule } from './admin/admin.module';
import { DataTablesModule } from 'angular-datatables';
import { AuthorModule } from './author/author.module';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardHomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AdminModule,
    AuthorModule,
    DataTablesModule
  ]
})
export class DashboardModule { }
