import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IRQLogin } from '../domain/auth';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }

  login(login: IRQLogin): Observable<HttpResponse<string>>{
    return this.http.post<string>(`${environment.baseUri}/api/login`, login, { observe: 'response'}).pipe(catchError((error) => this.processHttpmsgService.handleError(error)));
  }
}
