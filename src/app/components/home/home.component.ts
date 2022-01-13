import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showAuthRoute = true;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('token') && localStorage.getItem('user_id')) {
      this.showAuthRoute = false;
    } else {
      this.showAuthRoute = true;
    }
  }

}
