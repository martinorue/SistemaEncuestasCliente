import { IPregunta } from "./pregunta";

export interface IResultadoEncuesta {
  EncuestaID: number;
  Denominacion: string;
  FechaInicio: string;
  FechaFin: string;
  CantidadEncuestados: number;
  Estado: string;
  Objetivo: string;
  Preguntas: IPregunta[];
}

export interface IResultadoML {
  Texto: string;
  Valor: number;
  Etiqueta: string;
}

export interface IResultado {
  Texto: string;
  Valor: number;
  //color
}