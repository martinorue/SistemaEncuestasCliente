import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IOpcion, IPregunta } from '../../../domain/pregunta';
import { IEncuesta } from '../../../domain/encuesta';
import { CrearEncuestaService } from '../../../services/crear-encuesta.service';
import { EncuestasService } from '../../../services/encuestas.service';
import { switchMap } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { ENTER } from '@angular/cdk/keycodes';
import { FechaService } from 'src/app/services/fecha.service';
import { IRango } from 'src/app/domain/rango';

@Component({
  selector: 'app-editar-encuesta',
  templateUrl: './editar-encuesta.component.html',
  styleUrls: ['./editar-encuesta.component.css']
})
export class EditarEncuestaComponent implements OnInit {

  readonly separatorKeysCodes = [ENTER] as const;
  nuevasPreguntas: IPregunta[] = [];
  tipoPregunta: string = '';
  orden: number = 1;
  nuevaEncuesta!: IEncuesta;
  encuestaSubmit!: IEncuesta;
  errMess!: string;
  encuesta!: IEncuesta;
  clonPreguntas: IPregunta[] = [];
  multiple: boolean = false;
  opciones: IOpcion[] = [] || null;
  addOnBlur = true;
  rango!: IRango;
  datosEncuestaForm!: FormGroup;

  @ViewChild('eform') encuestaFormDirective: any

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.clonPreguntas, event.previousIndex, event.currentIndex);
    // const draggedPregunta: IPregunta = event.item.data;
  }

  constructor(
    private _router: Router,
    private _crearEncuestaService: CrearEncuestaService,
    private _encuestasService: EncuestasService,
    private _route: ActivatedRoute,
    private _fechaService: FechaService,
    private _fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this._route.params.pipe(switchMap((params: Params) => {
      return this._encuestasService.getEncuesta(params['id']);
    })).subscribe(encuesta => {
      this.encuesta = encuesta
      this.clonPreguntas = encuesta.Preguntas.sort((a, b) => a.Orden - b.Orden)

      this.rango = this._fechaService.getRango(encuesta.FechaInicio, encuesta.FechaFin)

      this.crearFormulario();

    });

  }

  crearFormulario() {
    this.datosEncuestaForm = this._fb.group({
      comienzo: [new Date(this.rango.anioInicio, this.rango.mesInicio, this.rango.diaInicio)],
      fin: [new Date(this.rango.anioFin, this.rango.mesFin, this.rango.diaFin)],
      nombreEncuesta: [this.encuesta.Denominacion, [Validators.required]],
      objetivoEncuesta: [this.encuesta.Objetivo, [Validators.required]],
    });
  }

  agregarNuevaPreguntaEmitida(value: IPregunta) {
    value.EncuestaID = this.encuesta.EncuestaID;
    if (value.Opciones?.length == 0) {
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
    pregunta.Requerida = !pregunta.Requerida
  }

  onSubmit() {

    this.ordenarPreguntas();

    this.nuevaEncuesta = {
      EncuestaID: this.encuesta.EncuestaID,
      Denominacion: this.datosEncuestaForm.value.nombreEncuesta,
      FechaInicio: this.datosEncuestaForm.value.comienzo,
      FechaFin: this.datosEncuestaForm.value.fin,
      CantidadEncuestados: 0,
      Estado: 'BORRADOR',
      Objetivo: this.datosEncuestaForm.value.objetivoEncuesta,
      Preguntas: this.clonPreguntas
    }

    const json_encuesta = JSON.stringify(this.nuevaEncuesta);
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

  validarOpciones() {
    return this.clonPreguntas.filter(pregunta => pregunta.Opciones?.length! < 2).length == 0;
  }

}
