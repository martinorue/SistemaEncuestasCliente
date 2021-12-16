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

  encuestaIds!: string[];
  encuesta!: Encuesta;
  @Input() resultadoEncuesta!: ResultadoEncuesta;
  constructor(private encuestasService: EncuestasService, private resultadosService: ResultadosService, private route: ActivatedRoute, private location: Location, @Inject('BaseURL') private BaseURL: string) { }

  ngOnInit(): void {
    this.encuestasService.getEncuestaIds().subscribe(encuestaIds => this.encuestaIds = encuestaIds);
    this.route.params
      .pipe(switchMap((params: Params) => {
        this.resultadosService.getResultados(params['id']).subscribe(resultadoEncuesta => this.resultadoEncuesta = resultadoEncuesta);
        return this.encuestasService.getEncuesta(params['id']);
      }))
      .subscribe(encuesta => {
        this.encuesta = encuesta;
      })

  }

  volver(): void {
    this.location.back();
  }

}
