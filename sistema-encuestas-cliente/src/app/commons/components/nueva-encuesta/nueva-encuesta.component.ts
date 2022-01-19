import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { IPregunta } from '../../../domain/pregunta';
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
  orden: number = 1;
  nuevaEncuesta!: IEncuesta;
  encuestaSubmit!: IEncuesta;
  errMess!: string;
  // data: any;

  rango = new FormGroup({
    comienzo: new FormControl(),
    fin: new FormControl(),
  });

  @ViewChild('eform') encuestaFormDirective: any

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.nuevasPreguntas, event.previousIndex, event.currentIndex);
    // const draggedPregunta: IPregunta = event.item.data;
  }

  constructor(private _router: Router,
    private _crearEncuestaService: CrearEncuestaService) { }

  ngOnInit(): void {
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

  agregarNuevaPreguntaEmitida(value: IPregunta){
    this.nuevasPreguntas.push(value);
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
    this.guardarEncuesta(json_encuesta);
    void this._router.navigateByUrl('/crear-encuesta/vista-previa-encuesta', {state: this.nuevaEncuesta}); //pasándole la encuesta creada
  }

  guardarEncuesta(respuesta: string) {
    this._crearEncuestaService.submitEncuesta(respuesta)
      .subscribe(respuestaSubmit => this.encuestaSubmit = respuestaSubmit,
        errmess => this.errMess = <any>errmess);
  }

}
