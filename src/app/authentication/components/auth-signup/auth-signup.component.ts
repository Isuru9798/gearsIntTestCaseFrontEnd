import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {


  registerForm = new FormGroup({});


  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {

  }


  ngOnInit(): void {
    this.registerFormBuilder();
  }


  registerFormBuilder() {
    this.registerForm = new FormGroup({
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      password_confirmation: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    if (
      this.registerForm.get('email').value !== '' &&
      this.registerForm.get('email').valid &&
      this.registerForm.get('password').value !== '' &&
      this.registerForm.get('password').valid &&
      this.registerForm.get('password').value === this.registerForm.get('password_confirmation').value
    ) {
      this.authService.register(this.registerForm.value).subscribe(
        // The response data
        (res) => {
          if (res['email']) {
            alert(res['email'][0])
          }
          if (res['success']) {
            this.showSuccess(res['message']);
            this.router.navigate(['authentication/signin'], { replaceUrl: true });
          }
        },
        // If there is an error
        (error) => {
          console.log(error);
          this.showSuccess(error['message']);
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
