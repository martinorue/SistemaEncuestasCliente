export interface IRespuestaTL {
    TextoRespuesta: string;
    Positivo: number;
    Negativo: number;
    Neutral: number;
    Mixto: number;
    Sentimiento: number;//0 pos, 1 neg, 2 neutro, 3 mixto
    Idioma: string;
    FrasesClave: any[];
    FechaHoraAnalisis: string;
    Etiquetas?: any;
    RespuestaID: number;
    FechaHoraContestada: string;
    Tipo: number;
    PersonaID: number;
    PreguntaID: number;
    Pregunta?: any;
}