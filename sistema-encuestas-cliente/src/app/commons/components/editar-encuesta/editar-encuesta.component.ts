import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IOpcion, IPregunta } from '../../../domain/pregunta';
import { IEncuesta } from '../../../domain/encuesta';
import { CrearEncuestaService } from '../../../services/crear-encuesta.service';
import { EncuestasService } from '../../../services/encuestas.service';
import { switchMap } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-editar-encuesta',
  templateUrl: './editar-encuesta.component.html',
  styleUrls: ['./editar-encuesta.component.css']
})
export class EditarEncuestaComponent implements OnInit {


  nuevasPreguntas: IPregunta[] = [];
  tipoPregunta: string = '';
  orden: number = 1;
  nuevaEncuesta!: IEncuesta;
  encuestaSubmit!: IEncuesta;
  errMess!: string;
  // encuestaIds!: string[];
  encuesta!: IEncuesta;
  clonPreguntas: IPregunta[] = [];
  multiple: boolean = false;
  opciones: IOpcion[] = [] || null;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER] as const;


  rango = new FormGroup({
    comienzo: new FormControl(),
    fin: new FormControl(),
  });

  @ViewChild('eform') encuestaFormDirective: any

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.clonPreguntas, event.previousIndex, event.currentIndex);
    // const draggedPregunta: IPregunta = event.item.data;
  }

  constructor(
    private _router: Router,
    private _crearEncuestaService: CrearEncuestaService,
    private _encuestasService: EncuestasService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this._encuestasService.getEncuestaIds()
    //   .subscribe(encuestaIds => this.encuestaIds = encuestaIds);

    this._route.params.pipe(switchMap((params: Params) => {
      return this._encuestasService.getEncuesta(params['id']);
    })).subscribe(encuesta => {
      this.encuesta = encuesta
      this.clonPreguntas = encuesta.Preguntas
    });

  }

  validarEncuesta(formNuevaEncuesta: NgForm) {

    if (formNuevaEncuesta != null || formNuevaEncuesta != undefined) {
      if (formNuevaEncuesta.value.nombreEncuesta != undefined
        && formNuevaEncuesta.value.objetivoEncuesta != undefined) {
        return formNuevaEncuesta.value.nombreEncuesta.trim() != ''
          && formNuevaEncuesta.value.objetivoEncuesta.trim() != ''
          && this.rango.value.comienzo != null
          && this.rango.value.fin != null
          && this.clonPreguntas.length != 0;
      } else return;
    } else return;
  }

  agregarNuevaPreguntaEmitida(value: IPregunta) {
    console.log(value);
    value.EncuestaID = this.encuesta.EncuestaID;
    if(value.Opciones?.length == 0){
      value.Opciones = null;
    }
    this.clonPreguntas.push(value);
  }

  borrarPregunta(pregunta: IPregunta) {
    const index = this.clonPreguntas.indexOf(pregunta);
    if (index > -1) {
      this.clonPreguntas.splice(index, 1);
    }
  }

  ordenarPreguntas() {
    this.clonPreguntas.forEach(pregunta => {
      const index = this.clonPreguntas.indexOf(pregunta);
      pregunta.Orden = index + 1;
    });
  }

  update(value: string, pregunta: IPregunta) {
    const index = this.clonPreguntas.indexOf(pregunta);
    this.clonPreguntas[index].TextoPregunta = value;
  }

  agregarOpcion(event: MatChipInputEvent, pregunta: IPregunta): void {
    const value = (event.value || '').trim();

    if (value) {
      const opcion: IOpcion = { OpcionID: 0, OpcionTexto: value }
      const index = this.clonPreguntas.indexOf(pregunta);
      this.clonPreguntas[index].Opciones?.push(opcion);
    }
    event.chipInput!.clear();
  }

  borrarOpcion(opcion: IOpcion, pregunta: IPregunta): void {
    const indexOpcion = pregunta.Opciones?.indexOf(opcion);

    if (indexOpcion != null && indexOpcion != undefined) {
      pregunta.Opciones?.splice(indexOpcion, 1);
    }
  }

  onChangeRequerida(pregunta: IPregunta) {
    if (pregunta.Requerida) {
      pregunta.Requerida = false;
    }
  }

  onSubmit(formNuevaEncuesta: NgForm) {

    this.ordenarPreguntas();

    this.nuevaEncuesta = {
      EncuestaID: this.encuesta.EncuestaID,
      Denominacion: formNuevaEncuesta.value.nombreEncuesta,
      FechaInicio: this.rango.value.comienzo,
      FechaFin: this.rango.value.fin,
      CantidadEncuestados: 0,
      Estado: 'BORRADOR',
      Objetivo: formNuevaEncuesta.value.objetivoEncuesta,
      Preguntas: this.clonPreguntas
    }

    const json_encuesta = JSON.stringify(this.nuevaEncuesta);
    console.log(json_encuesta);
    this.nuevasPreguntas = [];
    this.orden = 1;
    this.encuestaFormDirective.resetForm();
    this.guardarEncuestaEditada(this.nuevaEncuesta);
    void this._router.navigateByUrl('/crear-encuesta/vista-previa-encuesta', { state: this.nuevaEncuesta }); //pasándole la encuesta creada
  }


  guardarEncuestaEditada(encuesta: IEncuesta) {
    this._crearEncuestaService.submitEncuestaEditada(encuesta)
      .subscribe(respuestaSubmit => this.encuestaSubmit = respuestaSubmit,
        errmess => this.errMess = <any>errmess);
  }

}
