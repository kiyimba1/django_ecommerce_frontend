import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  apiUrl = 'http://127.0.0.1:8000/auth';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // tslint:disable-next-line:typedef
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  public getAuthToken(): any {
    return this.currentUserValue.access_token;
  }

  // tslint:disable-next-line:typedef
  login(username, password) {
    return this.http.post<any>(`${this.apiUrl}/login/`, {username, password})
      .pipe(
        map(user => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  // tslint:disable-next-line:variable-name
  register(first_name, last_name, username, password1, password2):
  Observable<any>{
    // @ts-ignore
      return this.http.post<any>(`${this.apiUrl}auth/registration/`, {first_name, last_name, username, password1, password2});

  }

  // tslint:disable-next-line:typedef
  logout() {
    localStorage.removeItem('currentUse');
    this.currentUserSubject.next(null);
  }

  refreshToken() {
    return this.http.post<any>(`${this.apiUrl}/token/refresh/`, {}, {withCredentials: true})
      .pipe(map((user)=>{
        this.currentUserSubject.next(user);
        this.startRefreshTokenTimer();
        return user;
      }));
  }

  private refreshTokenTimeout;

  private startRefreshTokenTimer() {
    const jwtToken = JSON.parse(atob(this.currentUserValue.access.split('.')[1]));
    const expires = new Date(jwtToken.exp * 1000);
    const timeout = expires.getTime() - Date.now() - (60 * 1000);
    this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  }

  private  stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }
}
