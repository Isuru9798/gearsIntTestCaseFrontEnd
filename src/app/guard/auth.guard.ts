import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public navigation: any;
  access = false;
  permission_nav: any;
  reqUrl = '';

  constructor(
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.reqUrl = state.url;

    return new Observable<boolean>(obs => {
      if (!localStorage.getItem('token') && !localStorage.getItem('user_id')) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.router.navigate(['/signin']);
      } else {
        obs.next(true);
      }
    })
  }
}
