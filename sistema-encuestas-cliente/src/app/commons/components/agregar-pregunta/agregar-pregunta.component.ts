import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IOpcion, IPregunta } from '../../../domain/pregunta';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {

  @Output() preguntaEmitida = new EventEmitter<IPregunta>();
  pregunta: string = '';
  tipoPregunta: string = '';
  nuevasPreguntas: IPregunta[] = [];
  requerida: boolean = true;
  orden: number = 1;
  opcion: string = '';
  opciones: IOpcion[] = [];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER] as const;

  constructor() { }

  ngOnInit(): void {
  }

  tiposPregunta: any = [
    { value: 'TEXTOLIBRE', viewValue: 'Texto Libre' },
    { value: 'OPCIONSIMPLE', viewValue: 'Opción Simple' },
    { value: 'OPCIONMULTIPLE', viewValue: 'Opción Múltiple' },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.nuevasPreguntas, event.previousIndex, event.currentIndex);
    // const draggedPregunta: IPregunta = event.item.data;
  }

  onChange() {
    !this.requerida;
  }

  agregarNuevaPregunta(value: string) {
    const nuevaPregunta: IPregunta = {
      PreguntaID: 0,
      TextoPregunta: value,
      Tipo: this.tipoPregunta,
      Orden: this.orden++,
      EncuestaID: 0,
      Requerida: this.requerida,
      Opciones: this.opciones,
      Resultados: null,
      ResultadosML: null
    }
    this.nuevasPreguntas.push(nuevaPregunta);
    this.preguntaEmitida.emit(nuevaPregunta);
    this.pregunta = '';
  }

  validarPregunta(): boolean {
    let ok = false;
    if (this.pregunta != null) {
      ok = true;
    }
    if (this.tipoPregunta == '') {
      ok = false;
    }
    if (this.tipoPregunta == 'OPCIONSIMPLE'
      && (this.opciones == null || this.opciones.length == 0)) {
      ok = false;
    }
    if (this.tipoPregunta == 'OPCIONMULTIPLE'
      && (this.opciones == null || this.opciones.length == 0)) {
      ok = false;
    }
    if (this.pregunta.trim() == '') {
      ok = false;
    }
    return ok;
  }

  borrarPregunta(pregunta: IPregunta) {
    const index = this.nuevasPreguntas.indexOf(pregunta);
    if (index > -1) {
      this.nuevasPreguntas.splice(index, 1);
    }
  }

  // agregarOpciona(value: string): void {
  //   const opcion: IOpcion = {
  //     OpcionID: 0,
  //     OpcionTexto: value
  //   }
  //   this.opciones.push(opcion);
  //   this.opcion = '';
  // }

  // validarOpcion() {
  //   if (this.opcion != null) {
  //     return this.opcion.trim() != ''
  //   } else {
  //     return false;
  //   }
  // }

  agregarOpcion(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.opciones.push({OpcionID: 0, OpcionTexto: value });
    }

    event.chipInput!.clear();
  }

  borrarOpcion(opcion: IOpcion): void {
    const index = this.opciones.indexOf(opcion);

    if (index >= 0) {
      this.opciones.splice(index, 1);
    }
  }

}
