export interface IPieChart {
    name: string;
    value: number;
}

export const OPCIONES_PIE_CHART = {
    gradient: true,
    showLegend: true,
    showLabels: true,
    isDoughnut: true,
    legendTitle: "",
    legendPosition: 'below'
}

export interface ISentColor{
    sentiment: string;
    color: string;
}

export interface IResultadoComprehend{
    texto: string;
    valor: number;
    color: string;
}