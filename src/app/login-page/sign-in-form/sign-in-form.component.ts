import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Postresponse } from '../../shared/authenticationPostResponse.model';
import { isLoggedIn } from 'src/app/services/isLoggedIn.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  signInForm!: FormGroup;

  isLogin: boolean = false;

  ischecking: boolean = false;

  errorState: boolean = false;

  errorMsg!: string;

  constructor(private router: Router, private checkPassword: isLoggedIn) {}

  ngOnInit(): void {
    this.signInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
    });
  }

  //* get signIn form controls
  get fsignIn() {
    return this.signInForm.controls;
  }

  toggleforms() {
    this.router.navigate(['/sign-up']);
  }

  closeAlert() {
    this.errorState = false;
  }

  onSubmit_signInForm() {
    this.ischecking = true;

    if (this.signInForm.valid) {
      this.checkPassword
        .checkSignIn(
          this.signInForm.value.email,
          this.signInForm.value.password
        )
        .subscribe(
          (response) => {
            console.log(response);
            this.ischecking = false;
            this.router.navigate(['/home']);
          },
          (error) => {
            console.log(error);
            this.ischecking = false;

            let errFound = error.error.error.message;

            if (!error.error || !error.error.error) {
              console.log(error);
              return;
            }

            if (errFound == 'INVALID_PASSWORD') {
              this.errorState = true;
              this.errorMsg =
                'Entered wrong password, check your email id or password.';
            } else if (errFound == 'EMAIL_NOT_FOUND') {
              this.errorState = true;
              this.errorMsg = 'No User found with the entered Email Id!';
            } else if (errFound == 'USER_DISABLED') {
              this.errorState = true;
              this.errorMsg = 'This user is disabled contact the admin.';
            } else {
              this.errorState = true;
              this.errorMsg = 'An unknown error occured here!';
              return;
            }
          }
        );
    } else {
      this.errorState = true;
      this.errorMsg = 'Form is empty try to logging using your credentials';
    }
    this.signInForm.reset();
  }
}
