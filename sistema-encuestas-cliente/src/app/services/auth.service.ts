import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IRLogin, IRQLogin } from '../domain/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: IRQLogin): Observable<HttpResponse<string>>{
    return this.http.post<string>(`${environment.baseUri}/api/login`, login, { observe: 'response'});
  }
}
