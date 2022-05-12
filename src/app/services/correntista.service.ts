import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://bankline-api-diogenes.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseUrl}/correntistas`);
  }
  create(correntista:any): Observable<any> {
    return this.http.post(`${baseUrl}/correntistas`,correntista);
  }
}