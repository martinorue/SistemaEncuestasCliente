import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { IEncuesta } from '../domain/encuesta';
import { IPregunta } from '../domain/resultadoEncuesta';

@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css']
})
export class CrearEncuestaComponent implements OnInit {
  nuevasPreguntas: IPregunta[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarPregunta(pregunta: IPregunta) {
    this.nuevasPreguntas.push(pregunta);
  }

  onSubmit(formNuevaEncuesta: NgForm) {
    
    const nuevaEncuesta: IEncuesta = {
      EncuestaID: 1,
      Denominacion: formNuevaEncuesta.value.nombreEncuesta,
      FechaInicio: 'fechaInicio',
      FechaFin: 'fechaFin',
      CantidadEncuestados: 0,
      Estado: 'Estado',
      Objetivo: formNuevaEncuesta.value.objetivoEncuesta,
      Preguntas: this.nuevasPreguntas
    }
    const json_encuesta = JSON.stringify(nuevaEncuesta);
    console.log(json_encuesta);
    
  }

}
