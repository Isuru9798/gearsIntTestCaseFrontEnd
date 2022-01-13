import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthorAction } from '../models/author-action';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }

  getAuthors() {
    return this.http.get(environment.apiUrl + 'admin/authors/authors');
  }
 
  authorStatus(obj: AuthorAction) {
    return this.http.post(environment.apiUrl + 'admin/authors/action', obj);
  }

}
