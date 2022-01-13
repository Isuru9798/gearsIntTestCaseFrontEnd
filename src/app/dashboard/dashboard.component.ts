import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from '../authentication/models/permission';
import { AuthenticationService } from '../authentication/services/authentication.service';
import { NavigationItem } from '../layout/navigation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navigation: any;
  constructor(
    public nav: NavigationItem,
    private authService: AuthenticationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPermission();

  }

  filterNavBar(role) {
    this.navigation.map((val) => {
      if (!val.role.includes(role)) {
        this.navigation.splice(this.navigation.indexOf(val), 1);
      }
    });
  }

  getPermission() {
    this.authService.getPermission().subscribe(
      (data: Permission) => {
        this.navigation = this.nav.get();
        const role = data.role;
        this.filterNavBar(role);
      },
      err => {
        console.log(err);
      });
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/dashboard/home');
    window.location.reload();
  }
}
