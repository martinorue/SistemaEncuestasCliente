import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IPregunta } from '../../../domain/pregunta';
import { IEncuesta } from '../../../domain/encuesta';
import { CrearEncuestaService } from '../../../services/crear-encuesta.service';
import { EncuestasService } from '../../../services/encuestas.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-editar-encuesta',
  templateUrl: './editar-encuesta.component.html',
  styleUrls: ['./editar-encuesta.component.css']
})
export class EditarEncuestaComponent implements OnInit {

  name: any = 'Angular';

  onNameChange(val: any) {
    console.log("Changed", val)
  }

  nuevasPreguntas: IPregunta[] = [];
  tipoPregunta: string = '';
  orden: number = 1;
  nuevaEncuesta!: IEncuesta;
  encuestaSubmit!: IEncuesta;
  errMess!: string;
  encuestaIds!: string[];
  encuesta!: IEncuesta;
  clonPreguntas: IPregunta[] = [];

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
    this._encuestasService.getEncuestaIds()
      .subscribe(encuestaIds => this.encuestaIds = encuestaIds);

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
      Preguntas: this.clonPreguntas
    }

    const json_encuesta = JSON.stringify(this.nuevaEncuesta);
    console.log(json_encuesta);
    this.nuevasPreguntas = [];
    this.orden = 1;
    this.encuestaFormDirective.resetForm();
    //this.guardarEncuesta(json_encuesta);
    void this._router.navigateByUrl('/crear-encuesta/vista-previa-encuesta', { state: this.nuevaEncuesta }); //pasándole la encuesta creada
  }


  // guardarEncuesta(respuesta: string) {
  //   this._crearEncuestaService.submitEncuesta(respuesta)
  //     .subscribe(respuestaSubmit => this.encuestaSubmit = respuestaSubmit,
  //       errmess => this.errMess = <any>errmess);
  // }

}
