import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentUser, ILoginForm } from '../interfaces/responses.interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  constructor(private http: HttpClient) {}
  public token: string | null = null;

  public urlApi = 'https://ds-test-api.herokuapp.com/api/';

  login(user: any) {
    return this.http.post<ICurrentUser>(`${this.urlApi}login`, user).pipe(
      tap((userResponse: ICurrentUser) => {
        console.log(userResponse);
        // localStorage.setItem('userToken', user.token);
        // localStorage.setItem('role', JSON.stringify(user.role));
        // localStorage.setItem('user', JSON.stringify(user));
        // this.setToken(user.token);
      })
    );
  }

  setToken(token: string | null) {
    this.token = token;
  }

  getToken() {
    return this.token;
  }

  isAuth() {
    return !!this.token;
  }
}
