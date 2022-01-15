import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEncuesta } from '../domain/encuesta';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CrearEncuestaService {

  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }
  private url_azure = 'https://mr87187.azurewebsites.net/api/Encuestas';

  submitEncuesta(respuesta: string): Observable<IEncuesta> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<IEncuesta>(this.url_azure, respuesta, httpOptions)
    .pipe(catchError(this.processHttpmsgService.handleError));
  }
}