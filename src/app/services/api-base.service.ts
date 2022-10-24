import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { currentUser, listOfUsers, loginForm, userAssessment, userGraph } from '../interfaces/responses.interfaces';
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
    return this.http.get<userAssessment[]>(`${this.urlApi}userassessments`).pipe(
      tap((userAsses: userAssessment[]) => {
        localStorage.setItem('userAsses', JSON.stringify(userAsses));
      })
    );
  }

  getGraph(id: string) {
    let params = new HttpParams().append('id', id);
    return this.http.get<userGraph>(`${this.urlApi}userassessment/graph`, { params: params }).pipe(
      tap((userAsses: userGraph) => {
        console.log(userAsses);
      })
    );
  }

  getUsers() {
    const headers = new HttpHeaders().set('X-Token', this.getToken());
    return this.http.get<listOfUsers[]>(`${this.urlApi}users`, { headers }).pipe(
      tap((listOfUsers: listOfUsers[]) => {
        console.log(listOfUsers);
        localStorage.setItem('listOfUsers', JSON.stringify(listOfUsers));
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
    localStorage.removeItem('listOfUsers');
  }
}
