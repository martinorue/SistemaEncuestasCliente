import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { IPregunta } from '../../../domain/resultadoEncuesta';
import { IEncuesta } from '../../../domain/encuesta';
import { CrearEncuestaService } from '../../../services/crear-encuesta.service';

@Component({
  selector: 'app-nueva-encuesta',
  templateUrl: './nueva-encuesta.component.html',
  styleUrls: ['./nueva-encuesta.component.css']
})
export class NuevaEncuestaComponent implements OnInit {

  nuevasPreguntas: IPregunta[] = [];
  tipoPregunta: string = '';
  pregunta: string = '';
  requerida: boolean = true;
  orden: number = 1;
  data: any;
  nuevaEncuesta!: IEncuesta;
  mostrarCrearEncuesta: boolean = true;
  encuestaSubmit!: IEncuesta;
  errMess!: string;

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
    // const draggedPregunta: IPregunta = event.item.data;
  }


  constructor(private _router: Router,
    private _crearEncuestaService: CrearEncuestaService) { }

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
      Orden: this.orden++,
      EncuestaID: 0,//@Input() encuesta
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

  ordenarPreguntas() {
    this.nuevasPreguntas.forEach(pregunta => {
      const index = this.nuevasPreguntas.indexOf(pregunta);
      pregunta.Orden = index + 1;
    });
  }

  volverCrearEncuesta() {
    this.mostrarCrearEncuesta = true;
  }

  onSubmit(formNuevaEncuesta: NgForm) {

    this.ordenarPreguntas();

    this.nuevaEncuesta = {
      EncuestaID: 0,
      Denominacion: formNuevaEncuesta.value.nombreEncuesta,
      FechaInicio: this.rango.value.comienzo,
      FechaFin: this.rango.value.fin,
      CantidadEncuestados: 0,
      Estado: 'BORRADOR',
      Objetivo: formNuevaEncuesta.value.objetivoEncuesta,
      Preguntas: this.nuevasPreguntas
    }

    const json_encuesta = JSON.stringify(this.nuevaEncuesta);
    console.log(json_encuesta);
    this.nuevasPreguntas = [];
    this.orden = 1;
    this.encuestaFormDirective.resetForm();
    this.mostrarCrearEncuesta = false;
    // void this._router.navigateByUrl('/dashboard');
    this.guardarEncuesta(json_encuesta);

  }

  guardarEncuesta(respuesta: string) {
    this._crearEncuestaService.submitEncuesta(respuesta)
      .subscribe(respuestaSubmit => this.encuestaSubmit = respuestaSubmit,
        errmess => this.errMess = <any>errmess);
  }

}