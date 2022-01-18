import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { IEncuesta } from '../domain/encuesta';


@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  
  constructor(private http: HttpClient) {
  }

  getEncuestas(): Observable<IEncuesta[]> {
    return this.http.get<IEncuesta[]>(`${environment.baseUri}/api/Encuestas`);
  }

  getEncuesta(id: string): Observable<IEncuesta> {
    return this.http.get<IEncuesta>(`${environment.baseUri}/api/Encuestas` + '/' + id);
  }

  getEncuestaIds(): Observable<string[] | any> {
    return this.getEncuestas()
      .pipe(map(encuestas => encuestas.map(encuesta => encuesta.EncuestaID)));
  }
}
