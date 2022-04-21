import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IRespuestaTL } from '../domain/respuestaTL';

@Injectable({
  providedIn: 'root'
})
export class RespuestasTLService {
  token = localStorage.getItem('access_token')!;

  constructor(private http: HttpClient) { }
  
  getTextosRespuestas(preguntaId: number): Observable<IRespuestaTL[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };
    return this.http.get<IRespuestaTL[]>(`${environment.baseUri}/api/Respuestas/respuestasTLPorPregunta?PreguntaID=` + preguntaId, httpOptions);
  }
}
