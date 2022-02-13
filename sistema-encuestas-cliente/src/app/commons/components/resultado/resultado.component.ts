import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IEncuesta } from '../../../domain/encuesta';
import { IResultado, IResultadoEncuesta } from '../../../domain/resultadoEncuesta';
import { EncuestasService } from '../../../services/encuestas.service';
import { ResultadosService } from '../../../services/resultados.service';
import { Location } from '@angular/common';
import { IResultadoComprehend, ISentColor } from 'src/app/domain/pie-chart';
import { MatDialog } from '@angular/material/dialog';
import { ModalOpinionesComponent } from '../modal-opiniones/modal-opiniones.component';
import { IRespuestaTL } from 'src/app/domain/respuestaTL';
import { RespuestasTLService } from 'src/app/services/respuestas-tl.service';
import { IPregunta } from 'src/app/domain/pregunta';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],

})
export class ResultadoComponent implements OnInit {

  resultadoEncuesta!: IResultadoEncuesta;
  encuesta!: IEncuesta;
  sent_color: ISentColor[] = [];
  resultadosComprehend: IResultadoComprehend[] = [];
  respuestasTL: IRespuestaTL[] = [];
  isModalOpen: boolean = false;
  encuestasIds: number[] = [];
  pregTextoLibre: IPregunta[] = [];
  preguntasIds: number[] = [];
  green: string = '#5AA454'

  constructor(
    private _resultadosService: ResultadosService,
    private _encuestasService: EncuestasService,
    private _respuestasTLService: RespuestasTLService,
    private _route: ActivatedRoute,
    private _location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {


    this._route.params
      .pipe(switchMap((params: Params) => {
        this._resultadosService.getResultados(params['id'])
          .subscribe(resultadoEncuesta => {
            this.resultadoEncuesta = resultadoEncuesta;
            this.pregTextoLibre = this.resultadoEncuesta.Preguntas?.filter(p => p.Tipo == 'TEXTOLIBRE');

            this.pregTextoLibre.forEach(p => this.preguntasIds.push(p.PreguntaID));

            this.preguntasIds.forEach(id => this._respuestasTLService.getTextosRespuestas(id)
              .subscribe(resTL => this.respuestasTL = resTL));

            this.resultadoEncuesta.Preguntas
              .map(pregunta => pregunta.Resultados?.map(result => {
                if (pregunta.Tipo == 'TEXTOLIBRE') {
                  const resultado_comprehend: IResultadoComprehend = {
                    texto: result.Texto,
                    valor: result.Valor,
                    color: this.definirColor(result.Texto)
                  }
                  this.resultadosComprehend.push(resultado_comprehend);
                } else {
                  const resultado_comprehend: IResultadoComprehend = {
                    texto: result.Texto,
                    valor: result.Valor,
                    color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
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

  verOpiniones(sentimento: string, preguntaId: number): void {
    let opinionesDeSentiment: IRespuestaTL[] = [];
    let sentiment!: string;
    switch (sentimento) {
      case 'POSITIVO':
        sentiment = "POSITIVE";
        break;
      case 'NEGATIVO':
        sentiment = 'NEGATIVE';
        break;
      case 'NEUTRO':
        sentiment = 'NEUTRAL';
        break;
      case 'MIXTO':
        sentiment = 'MIXED';
        break;
    }

    opinionesDeSentiment = this.respuestasTL.filter(tr =>
      tr.Sentimiento === sentiment
    );
    
    this.dialog.open(ModalOpinionesComponent, {
      data: opinionesDeSentiment
    });

  }

  definirColorHover(result: IResultado){
    let color: string = '';
    switch (result.Texto) {
      case 'POSITIVO':
        color = "#5AA454";
        break;
      case 'NEGATIVO':
        color = '#A10A28';
        break;
      case 'NEUTRO':
        color = '#AAAAAA';
        break;
      case 'MIXTO':
        color = '#C7B42C';
        break;
    }
    return color;
  }

  volver(): void {
    this._location.back();
  }

}
