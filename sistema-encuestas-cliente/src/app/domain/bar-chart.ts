export interface BarChart {
  name: string;
  series: Series[];
}

export interface Series {
  name: string;
  value: number;
}