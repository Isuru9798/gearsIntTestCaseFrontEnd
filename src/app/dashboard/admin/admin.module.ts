import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsManageComponent } from './components/authors-manage/authors-manage.component';
import { AuthorBookComponent } from './components/author-book/author-book.component';



@NgModule({
  declarations: [
    AuthorsManageComponent,
    AuthorBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
