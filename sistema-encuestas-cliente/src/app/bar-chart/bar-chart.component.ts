import { Component, Input, OnInit } from '@angular/core';
import { BarChart } from '../domain/bar-chart';
import { Resultado } from '../domain/resultado';
import { multi } from '../domain/data';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() preguntaResultados!: Resultado[];
  data: BarChart[] = [];
  multi!: any[];
  view: [number, number] = [700, 400];

  constructor() {
    Object.assign(this, { multi })
   }

  ngOnInit(): void {
    // let result: BarChart[] = [];

    // this.preguntaResultados.map(resultado => {
    //   result.push(new BarChart());
    // })
    
    // this.data = result;
  }

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
  yScaleMax: number = 1000;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA', '#FF5733', '#33A4FF']
  };

 

}
