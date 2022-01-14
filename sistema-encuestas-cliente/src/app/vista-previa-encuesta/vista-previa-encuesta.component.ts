import { Component, Input, OnInit } from '@angular/core';
import { IEncuesta } from '../domain/encuesta';

@Component({
  selector: 'app-vista-previa-encuesta',
  templateUrl: './vista-previa-encuesta.component.html',
  styleUrls: ['./vista-previa-encuesta.component.css']
})
export class VistaPreviaEncuestaComponent implements OnInit {
  @Input() nuevaEncuesta!: IEncuesta
  constructor() { }

  ngOnInit(): void {
  }

}
