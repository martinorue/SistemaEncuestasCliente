import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IPregunta } from '../domain/resultadoEncuesta';

@Component({
  selector: 'app-crear-preguntas',
  templateUrl: './crear-preguntas.component.html',
  styleUrls: ['./crear-preguntas.component.css']
})
export class CrearPreguntasComponent implements OnInit {
  // IPregunta[] = [];
  @Output() nuevasPreguntas = new EventEmitter<IPregunta>();
  opcionSeleccionada: string = '';

  tiposPregunta: any = [
    {value: 'TEXTOLIBRE', viewValue: 'Texto Libre'},
    {value: 'OPCIONSIMPLE', viewValue: 'Opción Simple'},
    {value: 'OPCIONMULTIPLE', viewValue: 'Opción Múltiple'},
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

  agregarNuevaPregunta(value: string) {
    const nuevaPregunta: IPregunta = {
      PreguntaID: 1,
      TextoPregunta: value,
      Tipo: this.opcionSeleccionada,
      Orden: 1,
      EncuestaID: 1,//@Input() encuesta
      Requerida: true,
      Opciones: null,
      Resultados: null,
      ResultadosML: null
    }
    this.nuevasPreguntas.emit(nuevaPregunta);
  }

  

}
