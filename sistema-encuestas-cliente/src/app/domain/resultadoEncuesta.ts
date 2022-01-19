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

export interface IPregunta {
  PreguntaID: number;
  TextoPregunta: string;
  Tipo: string;
  Orden: number;
  EncuestaID: number;
  Requerida: boolean;
  Opciones?: any;
  Resultados: IResultado[] | null;
  ResultadosML: IResultadoML[] | null;
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