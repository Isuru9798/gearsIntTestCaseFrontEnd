import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RedirectGuard implements CanActivate {
  UserToken = localStorage.getItem('token');
  userId = localStorage.getItem('user_id');

  constructor(
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable<boolean>(obs => {
      if (this.UserToken && this.userId) {
        obs.next(false);
        this.router.navigateByUrl('/dashboard/home');
      } else {
        localStorage.clear();
        obs.next(true);
      }
    });
  }
}
