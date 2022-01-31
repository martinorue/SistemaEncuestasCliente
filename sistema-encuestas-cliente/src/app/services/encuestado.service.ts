import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IEncuestado } from '../domain/encuestado';

@Injectable({
  providedIn: 'root'
})
export class EncuestadoService {

  constructor(private http: HttpClient) { }

  getEncuestados(): Observable<IEncuestado[]>{
    return this.http.get<IEncuestado[]>(`${environment.baseUri}/api/Respuestas/datosPersonales`)
  }
}
