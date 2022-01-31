import { Component, Input, OnInit } from '@angular/core';
import { IRespuestaTL } from 'src/app/domain/respuestaTL';

@Component({
  selector: 'app-textos-respuestas',
  templateUrl: './textos-respuestas.component.html',
  styleUrls: ['./textos-respuestas.component.css']
})
export class TextosRespuestasComponent implements OnInit {
  @Input() respuesta = <IRespuestaTL>{};
  constructor() { }

  ngOnInit(): void {
  }

}
