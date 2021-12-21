import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResultadoEncuesta } from '../domain/resultadoEncuesta';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  //private url_local_jsonServer = 'http://localhost:3000/EncuestaResultados';
 

  constructor(private http: HttpClient) { }

  getResultados(id: number): Observable<ResultadoEncuesta> {
    console.log(id);
    return this.http.get<ResultadoEncuesta>(`${environment.baseUri}/api/Resultados?id=` + id);
  }
}
