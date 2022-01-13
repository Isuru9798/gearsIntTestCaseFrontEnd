import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Book } from '../../models/book';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  // table
  @ViewChild(DataTableDirective, { static: false }) dtElement!: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(
    private authorService: AuthorService
  ) { }

  ngOnInit(): void {
    this.dtOptions = this.tableOption();
    this.getBooks();
  }
  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }
  tableOption() {
    return {
      pagingType: 'full_numbers',
      pageLength: 10,
      lengthMenu: [10, 20, 30],
      processing: true,
      destroy: true
    };
  }
  reRerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }
  ngOnDestroy(): void {
    // unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  // api calls
  getBooks() {
    this.authorService.getBooks().subscribe(
      (res: Book[]) => {
        console.log(res);
        
        this.books = res;
        this.reRerender();
      },
      err => {
        console.log(err);
      }
    )
  }
}
