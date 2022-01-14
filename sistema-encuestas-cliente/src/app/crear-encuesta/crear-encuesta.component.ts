import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
  orden: number = 0;
  data: any;

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

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.nuevasPreguntas, event.previousIndex, event.currentIndex);
    //this.orden = event.currentIndex;
    console.log(event.item.data);
  }

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
      PreguntaID: 0,
      TextoPregunta: value,
      Tipo: this.tipoPregunta,
      Orden: 0,
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
      EncuestaID: 0,
      Denominacion: formNuevaEncuesta.value.nombreEncuesta,
      FechaInicio: this.rango.value.comienzo,
      FechaFin: this.rango.value.fin,
      CantidadEncuestados: 0,
      Estado: 'Borrador',
      Objetivo: formNuevaEncuesta.value.objetivoEncuesta,
      Preguntas: this.nuevasPreguntas.sort((a, b) => a.Orden - b.Orden)
    }
    
    console.log(this.nuevasPreguntas);
    
    const json_encuesta = JSON.stringify(nuevaEncuesta);
    console.log(json_encuesta);
    this.nuevasPreguntas = [];
    this.encuestaFormDirective.resetForm();


    //void this._router.navigateByUrl('/dashboard');
  }

}
