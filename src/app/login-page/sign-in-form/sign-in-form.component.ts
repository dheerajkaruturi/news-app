import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css'],
})
export class SignInFormComponent implements OnInit {
  signInForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
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
  }

  //* get signIn form controls
  get fsignIn() {
    return this.signInForm.controls;
  }

  toggleforms() {
    this.router.navigate(['/sign-up'])
  }

  onSubmit_signInForm() {
    console.log(this.signInForm.value);
  }
}
