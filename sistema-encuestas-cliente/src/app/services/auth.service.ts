import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IRLogin, IRQLogin } from '../domain/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: IRQLogin): Observable<IRLogin>{
    return this.http.post<IRLogin>(`${environment.baseUri}/api/login`, login);
  }
}
