import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsManageComponent } from './components/authors-manage/authors-manage.component';
import { AdminServiceService } from './services/admin-service.service';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthorsManageComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
  ],
  providers: [
    AdminServiceService
  ]
})
export class AdminModule { }
