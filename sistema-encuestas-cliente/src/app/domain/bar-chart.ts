export interface BarChart {
  name: string;
  series: Serie[];
}

export interface Serie {
  name: string;
  value: number;
}

export const OpcionesBarChart = {
  showXAxis: true,
  showYAxis: true,
  gradient: true,
  legendTitle: 'Tags',
  showLegend: true,
  legendPosition: 'right',
  showXAxisLabel: true,
  xAxisLabel: 'Sentimientos',
  showYAxisLabel: true,
  yAxisLabel: 'Menciones',
  yScaleMax!: 0
}