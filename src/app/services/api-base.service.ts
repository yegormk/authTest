import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { currentUser, loginForm, userAssesment, userGraph } from '../interfaces/responses.interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  constructor(private http: HttpClient) {}
  token: string = '';
  currentGraph!: userGraph;

  public urlApi = 'https://ds-test-api.herokuapp.com/api/';

  login(user: loginForm) {
    return this.http.post<currentUser>(`${this.urlApi}login`, user).pipe(
      tap((userResponse: currentUser) => {
        console.log(userResponse);
        console.log(userResponse.token);
        this.token = userResponse.token;
        // localStorage.setItem('userToken', userResponse.token);
        // localStorage.setItem('role', JSON.stringify(userResponse.role));
        // localStorage.setItem('user', JSON.stringify(userResponse));
        // this.setToken(userResponse.token);
      })
    );
  }

  getAssesments() {
    const headers = new HttpHeaders().set('X-Token', this.token);
    return this.http.get<userAssesment[]>(`${this.urlApi}userassessments`, { headers }).pipe(
      tap((userAsses: userAssesment[]) => {
        console.log(userAsses);
      })
    );
  }

  getGraph(id: string) {
    const headers = new HttpHeaders().set('X-Token', this.token);
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http.get<userGraph>(`${this.urlApi}userassessment/graph`, { headers: headers, params: params }).pipe(
      tap((userAsses: userGraph) => {
        console.log(userAsses);
      })
    );
  }

  // getToken() {
  //   return this.token;
  // }
  //
  // isAuth() {
  //   return !!this.token;
  // }
}
