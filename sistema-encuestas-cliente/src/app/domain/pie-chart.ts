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

const verde: string = '#5AA454';
export const COLOR_SCHEME = {
    domain: [verde, '#AAAAAA', '#C7B42C', '#A10A28']
};