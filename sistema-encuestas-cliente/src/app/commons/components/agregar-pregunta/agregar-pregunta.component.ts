import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPregunta } from '../../../domain/resultadoEncuesta';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {

  pregunta: string = '';
  tipoPregunta: string = '';
  nuevasPreguntas: IPregunta[] = [];
  requerida: boolean = true;
  orden: number = 1;
  @Output() preguntaEmitida = new EventEmitter<IPregunta>();

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
      EncuestaID: 0,//@Input() encuesta
      Requerida: this.requerida,
      Opciones: null,
      Resultados: null,
      ResultadosML: null
    }
    this.nuevasPreguntas.push(nuevaPregunta);
    this.preguntaEmitida.emit(nuevaPregunta);
    this.pregunta = '';
  }

  validarPregunta() {
    if (this.pregunta != null) {
      return this.pregunta.trim() != ''
        && this.tipoPregunta != ''
        && this.tipoPregunta != null;
    } else return;
  }

  borrarPregunta(pregunta: IPregunta) {
    const index = this.nuevasPreguntas.indexOf(pregunta);
    if (index > -1) {
      this.nuevasPreguntas.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
