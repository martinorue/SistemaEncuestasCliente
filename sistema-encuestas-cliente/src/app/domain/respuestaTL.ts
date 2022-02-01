// export interface IRespuestaTL {
//     TextoRespuesta: string;
//     Positivo: number;
//     Negativo: number;
//     Neutral: number;
//     Mixto: number;
//     Sentimiento: number;//0 pos, 1 neg, 2 neutro, 3 mixto
//     Idioma: string;
//     FrasesClave: any[];
//     FechaHoraAnalisis: string;
//     Etiquetas?: any;
//     RespuestaID: number;
//     FechaHoraContestada: string;
//     Tipo: number;
//     PersonaID: number;
//     PreguntaID: number;
//     Pregunta?: any;
// }


export interface IRespuestaTL {
  RespuestaTextoLibreID: number;
  TextoRespuesta: string;
  Positivo: string;
  Negativo: number;
  Neutral: number;
  Mixto: number;
  Idioma: string;
  Sentimiento: string;
  FechaHoraAnalisis: string;
  FechaHoraContestada: string;
  PreguntaID: number;
  Persona?: Persona;
}

export interface Persona {
  PersonaId: number;
  Nombre: string;
  Correo: string;
  Celular: string;
}