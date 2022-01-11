import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { EncuestasService } from '../services/encuestas.service';
import { ResultadosService } from '../services/resultados.service';
import { IResultadoEncuesta } from '../domain/resultadoEncuesta';
import { IEncuesta } from '../domain/pregunta';

@Component({
  selector: 'app-encuesta-resultado',
  templateUrl: './encuesta-resultado.component.html',
  styleUrls: ['./encuesta-resultado.component.css']
})
export class EncuestaResultadoComponent implements OnInit {

  private _encuestaIds!: string[];
  encuesta!: IEncuesta;
  resultadoEncuesta!: IResultadoEncuesta;

  constructor(
    private _encuestasService: EncuestasService,
    private _resultadosService: ResultadosService,
    private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {
    this._encuestasService.getEncuestaIds().subscribe(encuestaIds => this._encuestaIds = encuestaIds);
    this._route.params
      .pipe(switchMap((params: Params) => {
        this._resultadosService.getResultados(params['id']).subscribe(resultadoEncuesta => this.resultadoEncuesta = resultadoEncuesta);
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
