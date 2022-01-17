import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IEncuesta } from '../../../domain/encuesta';
import { IResultadoEncuesta } from '../../../domain/resultadoEncuesta';
import { EncuestasService } from '../../../services/encuestas.service';
import { ResultadosService } from '../../../services/resultados.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  resultadoEncuesta!: IResultadoEncuesta;
  encuestaIds!: string[];
  encuesta!: IEncuesta;

  constructor(
    private _resultadosService: ResultadosService,
    private _encuestasService: EncuestasService,
    private _route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this._encuestasService.getEncuestaIds()
    .subscribe(encuestaIds => this.encuestaIds = encuestaIds);
    this._route.params
      .pipe(switchMap((params: Params) => {
        this._resultadosService.getResultados(params['id'])
        .subscribe(resultadoEncuesta => this.resultadoEncuesta = resultadoEncuesta);
        return this._encuestasService.getEncuesta(params['id']);
      }))
      .subscribe(encuesta => {
        this.encuesta = encuesta;
      })
  }

  volver(): void {
    this._location.back();
  }

}
