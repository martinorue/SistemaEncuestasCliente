import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IEncuesta } from '../../../domain/encuesta';
import { IResultadoEncuesta } from '../../../domain/resultadoEncuesta';
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

            console.log(this.pregTextoLibre);
            
            this.pregTextoLibre.forEach(p => this.preguntasIds.push(p.PreguntaID));

            this.preguntasIds.forEach(id => this._respuestasTLService.getTextosRespuestas(id)
            .subscribe(resTL => this.respuestasTL = resTL));

            console.log(this.respuestasTL);



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

    console.log('onInit resultado');
    // let textos: IRespuestaTL[] = [];
    // this.encuestasIds.forEach(id => this._respuestasTLService.getTextosRespuestas(id)
    // .subscribe(textosRespuestas => 
    //   textos.push(textosRespuestas[id])

    //   ))
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

  verOpiniones(sentiment: string, preguntaId: number): void {
    console.log(this.pregTextoLibre);
    this.isModalOpen = true;
    console.log(this.isModalOpen);
    console.log('sentiment', sentiment);
    console.log('preguntaId', preguntaId);
    let opinionesDeSentiment: IRespuestaTL[] = [];
    let sentimentNumber!: number;
    //0 pos, 1 neg, 2 neutro, 3 mixto
    switch (sentiment) {
      case 'POSITIVO':
        sentimentNumber = 0;
        break;
      case 'NEGATIVO':
        sentimentNumber = 1;
        break;
      case 'NEUTRO':
        sentimentNumber = 2;
        break;
      case 'MIXTO':
        sentimentNumber = 3;
        break;
    }

    opinionesDeSentiment = this.respuestasTL.filter(tr => tr.Sentimiento == sentimentNumber);

    // this._respuestasTLService.getTextosRespuestas(preguntaId)
    //   .subscribe(textosRespuestas => {
    //     opinionesDeSentiment = textosRespuestas.filter(tr => tr.Sentimiento == sentimentNumber);
    //     this.respuestasTL = opinionesDeSentiment
    //   });



    this.dialog.open(ModalOpinionesComponent, {
      data: opinionesDeSentiment
    });



    // this.dialog.afterOpened.subscribe(result => {
    //   this.isModalOpen = true;
    //   console.log('abrió');
    // });


  }

  volver(): void {
    this._location.back();
  }

}
