import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IEncuesta } from '../domain/encuesta';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CrearEncuestaService {
  token = localStorage.getItem('access_token')!;

  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }

  submitEncuesta(respuesta: string): Observable<IEncuesta> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    return this.http.post<IEncuesta>(`${environment.baseUri}/api/Encuestas`, respuesta, httpOptions)
    .pipe(catchError((error) => this.processHttpmsgService.handleError(error)));
  }

  submitEncuestaEditada(encuesta: IEncuesta): Observable<IEncuesta>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    return this.http.put<IEncuesta>(`${environment.baseUri}/api/Encuestas/` + encuesta.EncuestaID, encuesta, httpOptions)
    .pipe(catchError((error) => this.processHttpmsgService.handleError(error)));
  }

}