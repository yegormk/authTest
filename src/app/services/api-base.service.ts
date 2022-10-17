import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  constructor(private http: HttpClient) {}

  private urlApi = 'https://ds-test-api.herokuapp.com/';
}
