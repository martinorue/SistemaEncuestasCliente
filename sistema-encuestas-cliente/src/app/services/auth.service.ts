import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IRQLogin } from '../domain/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(login: IRQLogin): Observable<IRQLogin>{
    return this.http.post<IRQLogin>(`${environment.baseUri}/api/login`, login);
  }
}
