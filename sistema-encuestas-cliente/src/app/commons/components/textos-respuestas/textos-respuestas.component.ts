import { Component, Input, OnInit } from '@angular/core';
import { IRespuestaTL } from '../../../domain/respuestaTL';

@Component({
  selector: 'app-textos-respuestas',
  templateUrl: './textos-respuestas.component.html',
  styleUrls: ['./textos-respuestas.component.css']
})
export class TextosRespuestasComponent implements OnInit {
  @Input() respuesta!: IRespuestaTL;
  constructor() { }

  ngOnInit(): void {
    this.respuesta.Etiquetas = eliminarDuplicados(this.respuesta.Etiquetas); 
  }

}

export function eliminarDuplicados(array: string[]) {
  return array.sort().filter(function(item: any, pos: any, ary:any) {
      return !pos || item != ary[pos - 1];
  });
}

