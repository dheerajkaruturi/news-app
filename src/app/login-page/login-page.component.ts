import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  newUser: boolean = false;

  signInForm!: FormGroup;

  signUpForm!: FormGroup;

  signUpPassword_View!: string;

  showPassword: boolean = false;

  constructor() {}

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
    });

    this.signUpForm = new FormGroup({
      createUsername: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
        Validators.pattern(
          `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{6,10}$`
        ),
      ]),
      // confirmPassword: new FormControl(null, [
      //   Validators.required,
      //   Validators.minLength(6),
      //   Validators.maxLength(10),
      //   Validators.pattern(
      //     `^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{6,10}$`
      //   ),
      // ]),
    });
  }
  get f() {
    return this.signInForm.controls;
  }

  toggleforms() {
    this.newUser = !this.newUser;
  }

  togglePassword_Visibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit_signInForm() {
    console.log(this.signInForm);
  }

  onSubmit_signUpForm() {
    console.log(this.signUpForm);
  }
}
