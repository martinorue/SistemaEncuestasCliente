import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IRQLogin } from '../domain/auth';
import { IRegister } from '../domain/register';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }
  
  token = localStorage.getItem('access_token')!;
  
  login(login: IRQLogin): Observable<HttpResponse<string>> {
    return this.http.post<string>(`${environment.baseUri}/api/login`, login, { observe: 'response' }).pipe(catchError((error) => this.processHttpmsgService.handleError(error)));
  }
  
  // registro(usuario: string): Observable<IRegister> {
  //   console.log('estoy en service con:', usuario);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${this.token}`
  //     })
  //   };
  //   return this.http.post<IRegister>(`${environment.baseUri}/api/Cuentas/registrar`, usuario)
  //   .pipe(catchError((error) => this.processHttpmsgService.handleError(error)));
  // }


  
}
