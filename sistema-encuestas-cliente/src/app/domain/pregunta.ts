// export interface IPregunta {
//     value: string | undefined;
//     // id!: number;
//     PreguntaID: number;
//     TextoPregunta: string;
//     Tipo: string | undefined;
//     Orden: number;
//     Requerida: boolean;
//     EncuestaID: number | undefined;
//     Opciones: { OpcionID: number, OpcionTexto: string, checked: boolean }[];
//   }
  
  
  export interface IEncuesta {
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
  Opciones?: IOpcion[];
  Resultados?: any;
  ResultadosML?: any;
}

export interface IOpcion {
  OpcionID: number;
  OpcionTexto: string;
}