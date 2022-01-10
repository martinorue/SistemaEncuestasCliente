export interface BarChart {
  name: string;
  series: Serie[];
}

export interface Serie {
  name: string;
  value: number;
}