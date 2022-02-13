import { Injectable } from '@angular/core';
import { IRango } from '../domain/rango';

@Injectable({
  providedIn: 'root'
})
export class FechaService {

  constructor() { }

  getRango(fechaInicio: string, fechaFin: string): IRango {
    const rango: IRango = {
      diaInicio: +new Date(fechaInicio).getDate(),
      diaFin: +new Date(fechaFin).getDate(),
      mesInicio: +new Date(fechaFin).getMonth(),
      mesFin: +new Date(fechaFin).getMonth(),
      anioInicio: +new Date(fechaInicio).getFullYear(),
      anioFin: +new Date(fechaFin).getFullYear()
    }
    return rango;
  }
}
