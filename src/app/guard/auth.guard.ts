import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Permission } from '../authentication/models/permission';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { NavigationItem } from '../layout/navigation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public navigation: any;
  access = false;
  reqUrl = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    public nav: NavigationItem,
  ) {
    this.navigation = nav.get();

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.reqUrl = state.url;

    return new Observable<boolean>(obs => {
      if (!localStorage.getItem('token') && !localStorage.getItem('user_id')) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.router.navigate(['/signin']);
      } else {
        this.authService.getPermission().subscribe(
          (data: Permission) => {
            const role = data.role;

            this.access = false;

            this.navigation.map((nav) => {

              if (nav.url === this.reqUrl && nav.role.includes(role)) {
                this.access = true;
              }
            });

            if (this.access) {
              obs.next(true);
            } else {
              this.router.navigateByUrl('/dashboard/home');
            }
          },
          err => {
            if (err.status === 401) {
              localStorage.clear();
              this.router.navigateByUrl('/signin');
            }
          }
        );
      }
    })
  }
}
