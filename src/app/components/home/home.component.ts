import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/dashboard/author/models/book';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  books: Book[] = [];
  orBooks: Book[] = [];

  showAuthRoute = true;
  bookName = '';

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getBooks(); // get data
    if (localStorage.getItem('token') && localStorage.getItem('user_id')) {
      this.showAuthRoute = false;
    } else {
      this.showAuthRoute = true;
    }
  }

  // api call
  getBooks() {
    this.homeService.getAllBooks().subscribe(
      (res: Book[]) => {
        this.books = res;
        this.orBooks = res;
      },
      err => {
        console.log(err);

      }
    )
  }

  // search filter
  filterList() {
    if (this.bookName !== '') {
      this.books = this.orBooks.filter((val: Book) => {
        return val.book_name === this.bookName;
      });
    } else {
      this.books = this.orBooks;
    }
  }

}
