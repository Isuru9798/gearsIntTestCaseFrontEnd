import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    private http: HttpClient,
    public router: Router,
  ) { }


  login(req: Login) {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    return this.http.post(environment.apiUrl + 'authentication/login', req, config);
  }

  register(req) {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    return this.http.post(environment.apiUrl + 'authentication/register', req, config);
  }

  adminLogin(req) {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }
    return this.http.post(environment.apiUrl + 'authentication/admin/login', req, config);
  }
}
