import { Component, Input, OnInit } from '@angular/core';
import { BarChart } from '../domain/bar-chart';
import { Resultado } from '../domain/resultado';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() preguntaResultados!: Resultado[];
  data: BarChart[] = [];

  constructor() { }

  ngOnInit(): void {
    let result: BarChart[] = [];

    this.preguntaResultados.map(resultado => {
      result.push(new BarChart());
    })
    
    this.data = result;
  }

  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Sentimiento';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Menciones';
  legendTitle: string = 'Tags';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };

 

}
