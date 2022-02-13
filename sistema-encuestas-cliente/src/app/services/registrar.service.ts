import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IRegister } from '../domain/register';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }
  token = localStorage.getItem('access_token')!;


  registro(usuario: string): Observable<HttpResponse<string>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`,
      }),
      observe: 'response' as 'body'
    };
    return this.http.post<HttpResponse<string>>(`${environment.baseUri}/api/Cuentas/registrar`, usuario, httpOptions)
      .pipe(catchError((error) => this.processHttpmsgService.handleError(error)));
  }
}
