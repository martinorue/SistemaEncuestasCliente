import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IEncuesta } from '../../../domain/encuesta';
import { IResultadoEncuesta } from '../../../domain/resultadoEncuesta';
import { EncuestasService } from '../../../services/encuestas.service';
import { ResultadosService } from '../../../services/resultados.service';
import { Location } from '@angular/common';
import { IResultadoComprehend, ISentColor } from 'src/app/domain/pie-chart';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  resultadoEncuesta!: IResultadoEncuesta;
  encuestaIds!: string[];
  encuesta!: IEncuesta;
  sent_color: ISentColor[] = [];
  resultadosComprehend: IResultadoComprehend[] = [];


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
          .subscribe(resultadoEncuesta => {
            this.resultadoEncuesta = resultadoEncuesta;
            this.resultadoEncuesta.Preguntas
              .map(pregunta => pregunta.Resultados?.map(result => {
                if(pregunta.Tipo == 'TEXTOLIBRE'){

                  const resultado_comprehend: IResultadoComprehend = {
                    texto: result.Texto,
                    valor: result.Valor,
                    color: this.definirColor(result.Texto)
                  }
                  
                  this.resultadosComprehend.push(resultado_comprehend);
                }
              }));
          });
        return this._encuestasService.getEncuesta(params['id']);
      }))
      .subscribe(encuesta => {
        this.encuesta = encuesta;
      });



  }

  definirColor(Texto: string) {
    const verde: string = '#5AA454';
    const gris: string = '#AAAAAA';
    const amarillo: string = '#C7B42C';
    const rojo: string = '#A10A28';

    let color: string = '';

    switch (Texto) {
      case 'POSITIVO':
        color = verde;
        break;
      case 'NEGATIVO':
        color = rojo;
        break;
      case 'MIXTO':
        color = amarillo;
        break;
      case 'NEUTRO':
        color = gris;
    }

    return color;
  }

  volver(): void {
    this._location.back();
  }

}
