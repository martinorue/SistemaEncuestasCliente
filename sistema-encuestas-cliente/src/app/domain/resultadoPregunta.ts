import { Resultado } from "./resultado";

export class ResultadoPregunta {
    //id!: number;
    PreguntaID!: number;
    TextoPregunta!: string;
    Tipo!: string;
    Orden!: number;
    Requerida!: true;
    Opciones!: null;
    Resultados!: Resultado[];
}