import { Component, Input, OnInit } from '@angular/core';
import { BarChart } from '../domain/bar-chart';
import { Resultado } from '../domain/resultado';
import { Serie } from '../domain/bar-chart';
import { ResultadoML } from '../domain/resultadoML';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() preguntaResultados!: ResultadoML[];
  data: BarChart[] = [];
  view: [number, number] = [700, 400];

  constructor() {
  }

  ngOnInit(): void {

    let datos: BarChart[] = [];

    this.preguntaResultados.map(resultado => {
      console.log(resultado);
      
      let series: Serie[] = [];

      const serie: Serie = {
        name: resultado.Texto,
        value: resultado.Valor
      }
      series.push(serie);
      const dato: BarChart = {
        name: resultado.Etiqueta,
        series: series
      }
      datos.push(dato);

    })

    this.data = datos
    
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
