import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Postresponse } from '../shared/authenticationPostResponse.model';
import { Subject } from 'rxjs';
import { User } from '../shared/user.model';

@Injectable({
  providedIn: 'root',
})
export class isLoggedIn {
  user = new Subject<User>();

  constructor(private httpClient: HttpClient) {}

  checkSignIn(email: string, password: string) {
    return this.httpClient.post<Postresponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9BCII5uIun5vypcruBaz8dW0aSn2KfFs',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
