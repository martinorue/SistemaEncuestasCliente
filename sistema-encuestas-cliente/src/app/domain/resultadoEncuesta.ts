
// export interface IResultadoEncuesta {
//     //id!: number;
//     EncuestaID: number;
//     Denominacion: string;
//     FechaInicio: string;
//     FechaFin: string;
//     CantidadEncuestados: number;
//     Estado: string;
//     Objetivo: string;
//     Preguntas: ResultadoPregunta[]
// }


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
  Resultados: IResultado[];
  ResultadosML?: IResultadoML[];
}

export interface IResultadoML {
  Texto: string;
  Valor: number;
  Etiqueta: string;
}

export interface IResultado {
  Texto: string;
  Valor: number;
}