import { IResultado, IResultadoML } from "./resultadoEncuesta";

export interface IPregunta {
    PreguntaID: number;
    TextoPregunta: string;
    Tipo: string;
    Orden: number;
    EncuestaID: number;
    Requerida: boolean;
    Opciones?: IOpcion[] | null;
    Resultados: IResultado[] | null;
    ResultadosML: IResultadoML[] | null;
}

export interface IOpcion {
    OpcionID: number;
    OpcionTexto: string;
}