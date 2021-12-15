import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ResultadoEncuesta } from '../domain/resultadoEncuesta';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private url_local = 'http://localhost:3000/EncuestaResultados';
  private url_azure = 'https://mr87187.azurewebsites.net/api/Encuestas';

  constructor(private http: HttpClient) { }

  getResultados(id: number): Observable<ResultadoEncuesta | undefined> {
    console.log(id);
    return this.http.get<ResultadoEncuesta | undefined>(this.url_local + '/' + id);
  }
}
