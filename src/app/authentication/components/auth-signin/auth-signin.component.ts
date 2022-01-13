import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss']
})

export class AuthSigninComponent implements OnInit {

  loginForm = new FormGroup({});

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {

  }


  ngOnInit(): void {
    this.loginFormBuilder();
  }


  loginFormBuilder() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    });
  }
  onSubmit() {
    if (
      this.loginForm.get('email').value !== '' &&
      this.loginForm.get('email').valid &&
      this.loginForm.get('password').value !== '' &&
      this.loginForm.get('password').valid
    ) {
      this.authService.login(this.loginForm.value).subscribe(
        // The response data
        (response) => {
          if (response['success']) {
            localStorage.setItem('token', response['access_token']);
            localStorage.setItem('user_id', response['user_id']);

            this.showSuccess('Login Success!');
            this.router.navigate(['dashboard/home'], { replaceUrl: true });
          } else {
            this.showSuccess(response['message']);
          }
        },
        // If there is an error
        (error) => {
          console.log(error);
          this.showError('login failed')
        },
      );
    } else {

    }

  }

  showSuccess(srt: string) {
    alert(srt);
  }
  showError(srt: string) {
    alert(srt);
  }
}