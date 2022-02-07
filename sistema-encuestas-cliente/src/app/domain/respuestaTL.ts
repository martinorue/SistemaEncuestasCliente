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
  //Etiquetas: IEtiqueta[]; <-- agregar al JSON
}

// export interface IEtiqueta{
//   NombreEtiqueta: string;
// }

export interface Persona {
  PersonaId: number;
  Nombre: string;
  Correo: string;
  Celular: string;
}