import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Signin } from './interfaces/signin';
import { Signup } from './interfaces/signup';
import { Auth, Payload } from './interfaces/auth';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private AUTH_KEY: string = 'auth';
  private TOKEN_KEY: string = 'token';
  private endpoint: string = environment.api + '/auth';
  constructor(
    private http: HttpClient
  ) { }
  signIn(credential: Signin) {
    return this.http.post(this.endpoint + '/signin', credential)
      .pipe(
        map((auth: Auth) => this.setAuth(auth)),
        catchError((response) => throwError(response.error))
      );
  }
  signUp(data: Signup) {
    return this.http.post(this.endpoint + '/signup', data)
      .pipe(
        catchError((response) => throwError(response.error))
      );
  }
  setAuth(auth: Auth) {
    if (!auth) return;
    this.auth = auth.payload;
    this.token = auth.token;
  }
  set auth(payload: Payload) {
    window.localStorage.setItem(
      this.AUTH_KEY,
      JSON.stringify(payload)
    );
  }
  get auth() {
    return JSON.parse(
      window.localStorage.getItem(this.AUTH_KEY)
    );
  }
  set token(token: string) {
    window.localStorage.setItem(
      this.TOKEN_KEY,
      token
    );
  }
  get token() {
    return window.localStorage.getItem(this.TOKEN_KEY);
  }
  signOut() {
    window.localStorage.removeItem(this.AUTH_KEY);
    window.localStorage.removeItem(this.TOKEN_KEY);
  }
}
