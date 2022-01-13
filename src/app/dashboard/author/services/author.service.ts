import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getBooks() {
    return this.http.get(environment.apiUrl + 'author/get-books');
  }
  addBook(book: Book) {
    return this.http.post(environment.apiUrl + 'author/add-book', book);
  }

}
