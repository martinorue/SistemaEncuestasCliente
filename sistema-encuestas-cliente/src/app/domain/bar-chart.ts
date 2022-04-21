import { LegendPosition } from '@swimlane/ngx-charts';

export interface BarChart {
  name: string;
  series: Serie[];
}

export interface Serie {
  name: string;
  value: number;
}

export const colorScheme = ['#5AA454', '#C7B42C', '#AAAAAA', '#FF5733', '#33A4FF']

export const OpcionesBarChart = {
  showXAxis: true,
  showYAxis: true,
  gradient: false,
  legendTitle: 'Tags',
  showLegend: true,
  legendPosition: LegendPosition.Below,
  showXAxisLabel: true,
  xAxisLabel: 'Sentimientos',
  showYAxisLabel: true,
  yAxisLabel: 'Menciones',
  yScaleMax!: 0,
}

