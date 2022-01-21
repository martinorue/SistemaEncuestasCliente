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

  constructor(private http: HttpClient, private processHttpmsgService: ProcessHttpmsgService) { }

  submitEncuesta(respuesta: string): Observable<IEncuesta> {
		const token = localStorage.getItem('access_token')!;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<IEncuesta>(`${environment.baseUri}/api/Encuestas`, respuesta, httpOptions)
    .pipe(catchError((error) => this.processHttpmsgService.handleError(error)));
  }
}