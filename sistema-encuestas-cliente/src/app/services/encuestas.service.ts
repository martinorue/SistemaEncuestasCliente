import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Pregunta } from '../domain/pregunta';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Encuesta } from '../domain/encuesta';


@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  
  private url_local_jsonServer = 'http://localhost:3000/EncuestaResultados';
  private url_azure = 'https://mr87187.azurewebsites.net/api/Encuestas';
  private url_local = 'https://localhost:44384/api/Encuestas';

  constructor(private http: HttpClient) {
  }

  getEncuestas(): Observable<Encuesta[]> {
    return this.http.get<Encuesta[]>(this.url_local);
  }

  getEncuesta(id: string): Observable<Encuesta> {
    return this.http.get<Encuesta>(this.url_local + '/' + id);
  }

  getEncuestaIds(): Observable<string[] | any> {
    return this.getEncuestas()
      .pipe(map(encuestas => encuestas.map(encuesta => encuesta.EncuestaID)));
  }
}
