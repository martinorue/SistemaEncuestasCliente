import { ResultadoPregunta } from "./resultadoPregunta";

export class ResultadoEncuesta {
    id!: number;
    EncuestaID!: number;
    Denominacion!: string;
    FechaInicio!: string;
    FechaFin!: string;
    CantidadEncuestados!: number;
    Estado!: string;
    Objetivo!: string;
    Preguntas!: ResultadoPregunta[]
}

