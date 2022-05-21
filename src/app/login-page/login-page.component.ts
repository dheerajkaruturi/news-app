import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  newUser: boolean = false;

  constructor() {}

  ngOnInit() {}

  //* toggles signIn and signUp forms
  toggleforms() {
    this.newUser = !this.newUser;
  }
}
