import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IResultadoEncuesta } from '../domain/resultadoEncuesta';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  //private url_local_jsonServer = 'http://localhost:3000/EncuestaResultados';


  constructor(private http: HttpClient) { }

  getResultados(id: number): Observable<IResultadoEncuesta> {
    return this.http.get<IResultadoEncuesta>(`${environment.baseUri}/api/Resultados?id=` + id);
  }
}
