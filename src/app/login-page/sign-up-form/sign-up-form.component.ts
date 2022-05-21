import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css'],
})
export class SignUpFormComponent implements OnInit {
  signUpForm!: FormGroup;

  showPassword: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
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

  onSubmit_signUpForm() {
    console.log(this.signUpForm);
  }
}
