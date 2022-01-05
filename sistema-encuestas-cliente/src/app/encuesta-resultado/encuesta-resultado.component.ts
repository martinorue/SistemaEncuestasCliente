import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Encuesta } from '../domain/encuesta';
import { ResultadoEncuesta } from '../domain/resultadoEncuesta';
import { EncuestasService } from '../services/encuestas.service';
import { ResultadosService } from '../services/resultados.service';

@Component({
  selector: 'app-encuesta-resultado',
  templateUrl: './encuesta-resultado.component.html',
  styleUrls: ['./encuesta-resultado.component.css']
})
export class EncuestaResultadoComponent implements OnInit {

  private _encuestaIds!: string[];
  encuesta!: Encuesta;
  resultadoEncuesta!: ResultadoEncuesta;

  constructor(
    private _encuestasService: EncuestasService,
    private _resultadosService: ResultadosService,
    private _route: ActivatedRoute,
    private _location: Location, @Inject('BaseURL') private _BaseURL: string) { }

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
