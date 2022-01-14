import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IEncuesta } from '../domain/encuesta';
import { IPregunta } from '../domain/resultadoEncuesta';


@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css']
})
export class CrearEncuestaComponent implements OnInit {
  nuevasPreguntas: IPregunta[] = [];
  tipoPregunta: string = '';
  pregunta: string = '';
  requerida: boolean = true;

  rango = new FormGroup({
    comienzo: new FormControl(),
    fin: new FormControl(),
  });

  @ViewChild('eform') encuestaFormDirective: any


  tiposPregunta: any = [
    { value: 'TEXTOLIBRE', viewValue: 'Texto Libre' },
    { value: 'OPCIONSIMPLE', viewValue: 'Opción Simple' },
    { value: 'OPCIONMULTIPLE', viewValue: 'Opción Múltiple' },
  ];

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  validarPregunta() {
    if (this.pregunta != null) {
      return this.pregunta.trim() != ''
        && this.tipoPregunta != ''
        && this.tipoPregunta != null;
    } else return;
  }

  validarEncuesta(formNuevaEncuesta: NgForm) {

    if (formNuevaEncuesta != null || formNuevaEncuesta != undefined) {
      if (formNuevaEncuesta.value.nombreEncuesta != undefined
        && formNuevaEncuesta.value.objetivoEncuesta != undefined) {
        return formNuevaEncuesta.value.nombreEncuesta.trim() != ''
          && formNuevaEncuesta.value.objetivoEncuesta.trim() != ''
          && this.rango.value.comienzo != null
          && this.rango.value.fin != null
          && this.nuevasPreguntas.length != 0;
      } else return;
    } else return;
  }

  onChange() {
    !this.requerida;
  }

  agregarPregunta(pregunta: IPregunta) {
    this.nuevasPreguntas.push(pregunta);
  }

  agregarNuevaPregunta(value: string) {
    const nuevaPregunta: IPregunta = {
      PreguntaID: 1,
      TextoPregunta: value,
      Tipo: this.tipoPregunta,
      Orden: 1,
      EncuestaID: 1,//@Input() encuesta
      Requerida: this.requerida,
      Opciones: null,
      Resultados: null,
      ResultadosML: null
    }
    this.nuevasPreguntas.push(nuevaPregunta);
    this.pregunta = '';
  }

  borrarPregunta(pregunta: IPregunta) {
    const index = this.nuevasPreguntas.indexOf(pregunta);
    if (index > -1) {
      this.nuevasPreguntas.splice(index, 1);
    }
  }

  onSubmit(formNuevaEncuesta: NgForm) {


    const nuevaEncuesta: IEncuesta = {
      EncuestaID: 1,
      Denominacion: formNuevaEncuesta.value.nombreEncuesta,
      FechaInicio: this.rango.value.comienzo,
      FechaFin: this.rango.value.fin,
      CantidadEncuestados: 0,
      Estado: 'Borrador',
      Objetivo: formNuevaEncuesta.value.objetivoEncuesta,
      Preguntas: this.nuevasPreguntas
    }
    const json_encuesta = JSON.stringify(nuevaEncuesta);
    console.log(json_encuesta);
    this.nuevasPreguntas = [];
    this.encuestaFormDirective.resetForm();
    //void this._router.navigateByUrl('/dashboard');
  }

}
