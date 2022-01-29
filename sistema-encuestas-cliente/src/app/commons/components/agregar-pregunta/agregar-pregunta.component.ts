import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { IOpcion, IPregunta } from '../../../domain/pregunta';
import { ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TiposPregunta } from 'src/app/domain/tiposPregunta';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent implements OnInit {

  @Output() preguntaEmitida = new EventEmitter<IPregunta>();
  tiposPregunta = TiposPregunta;
  pregunta: string = '';
  nuevasPreguntas: IPregunta[] = [];
  requerida: boolean = false;
  orden: number = 1;
  opcion: string = '';
  opciones: IOpcion[] = [];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER] as const;
  agregarPreguntaForm!: FormGroup;

  @ViewChild('apform') agregarPreguntaFormDirective: any;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.agregarPreguntaForm = this._fb.group({
      pregunta: ['', [Validators.required, this.noWhitespaceValidator]],
      tiposPregunta: ['', [Validators.required]],
      requerida: [this.requerida = false],
      opciones: [this.opciones]
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }


  onChangeRequerida() {
    !this.requerida;
  }

  agregarNuevaPregunta() {
    const nuevaPregunta: IPregunta = {
      PreguntaID: 0,
      TextoPregunta: this.agregarPreguntaForm.value.pregunta,
      Tipo: this.agregarPreguntaForm.value.tiposPregunta,
      Orden: this.orden++,
      EncuestaID: 0,
      Requerida: this.agregarPreguntaForm.value.requerida,
      Opciones: this.opciones,
      Resultados: null,
      ResultadosML: null
    }
    this.nuevasPreguntas.push(nuevaPregunta);
    this.preguntaEmitida.emit(nuevaPregunta);
    this.opciones = [];
    if(nuevaPregunta.Tipo == 'TEXTOLIBRE'){
      nuevaPregunta.Opciones = null;
    }

    this.agregarPreguntaFormDirective.resetForm();
  }

  validarPregunta(): boolean {
    let ok = false;

    if (this.agregarPreguntaForm.value.tiposPregunta == 'OPCIONSIMPLE'){
      if(this.opciones.length < 2){
        ok = false;
      }else{
        ok = true;
      }
    }else if(this.agregarPreguntaForm.value.tiposPregunta == 'OPCIONMULTIPLE'){
      if(this.opciones.length < 2){
        ok = false;
      }else{
        ok = true;
      }
    }else{
      ok = true;
    }
    return ok;
  }

  borrarPregunta(pregunta: IPregunta) {
    const index = this.nuevasPreguntas.indexOf(pregunta);
    if (index > -1) {
      this.nuevasPreguntas.splice(index, 1);
    }
  }

  agregarOpcion(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.opciones.push({ OpcionID: 0, OpcionTexto: value });
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

