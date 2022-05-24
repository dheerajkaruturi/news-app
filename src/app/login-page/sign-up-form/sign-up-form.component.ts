import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Postresponse } from '../../shared/authenticationPostResponse.model';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;

  showPassword: boolean = false;

  isCreating: boolean = false;

  errorStatus: boolean = false;

  errorMsg!: string;

  constructor(private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
    });
  }

  //* get signup form controls
  get fsignUp() {
    return this.signUpForm.controls;
  }

  //* hide or show password
  togglePassword_Visibility() {
    this.showPassword = !this.showPassword;
  }

  toggleforms() {
    this.router.navigate(['/login']);
  }

  closeAlert() {
    this.errorStatus = false;
  }

  onSubmit_signUpForm() {
    console.log(this.signUpForm.value.email, this.signUpForm.value.password);

    if (this.signUpForm.valid) {
      this.isCreating = true;

      //* posting authentication details to firebase.
      this.httpClient
        .post<Postresponse>(
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9BCII5uIun5vypcruBaz8dW0aSn2KfFs',
          {
            email: this.signUpForm.value.email,
            password: this.signUpForm.value.password,
            returnSecureToken: true,
          }
        )
        .subscribe(
          (responseData) => {
            this.isCreating = false;
            console.log(responseData);
          },
          (error) => {
            console.log(error);
            if (!error.ok) {
              console.log(error.error.error.message);
              this.isCreating = false;
              this.errorStatus = true;
              this.errorMsg = error.error.error.message;
              return;
            }
          }
        );

      this.signUpForm.reset();
    } else {
      this.errorStatus = true;
      this.errorMsg = 'Form is Empty';
      return;
    }
  }
}
