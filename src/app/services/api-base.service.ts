import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { currentUser, loginForm, userAssessment, userGraph } from '../interfaces/responses.interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  currentGraph!: userGraph;

  constructor(private http: HttpClient) {}

  public urlApi = 'https://ds-test-api.herokuapp.com/api/';

  login(user: loginForm) {
    return this.http.post<currentUser>(`${this.urlApi}login`, user).pipe(
      tap((userResponse: currentUser) => {
        localStorage.setItem('token', userResponse.token);
        localStorage.setItem('role', userResponse.role);
      })
    );
  }

  getAssessments() {
    const headers = new HttpHeaders().set('X-Token', this.getToken());
    return this.http.get<userAssessment[]>(`${this.urlApi}userassessments`, { headers }).pipe(
      tap((userAsses: userAssessment[]) => {
        localStorage.setItem('userAsses', JSON.stringify(userAsses));
      })
    );
  }

  getGraph(id: string) {
    const headers = new HttpHeaders().set('X-Token', this.getToken());
    let params = new HttpParams().append('id', id);
    return this.http.get<userGraph>(`${this.urlApi}userassessment/graph`, { headers: headers, params: params }).pipe(
      tap((userAsses: userGraph) => {
        console.log(userAsses);
      })
    );
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userAsses');
  }
}
