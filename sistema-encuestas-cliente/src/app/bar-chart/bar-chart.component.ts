import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BarChart } from '../domain/bar-chart';
import { Serie } from '../domain/bar-chart';
import { IResultadoML } from '../domain/resultadoEncuesta';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() preguntaResultadosML!: IResultadoML[];
  data: BarChart[] = [];
  view: [number, number] = [700, 400];

  constructor() {
    console.log(innerWidth);
    
    this.view = [innerWidth / 2, 400];
  }

  ngOnInit(): void {

    let datos: BarChart[] = [];

    this.preguntaResultadosML.map(resultado => {

      let series: Serie[] = [];

      const serie: Serie = {
        name: resultado.Etiqueta,
        value: resultado.Valor
      }
      series.push(serie);

      const dato: BarChart = {
        name: resultado.Texto,
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
  legendTitle: string = 'Tags';
  showLegend: boolean = true;
  legendPosition: string = 'right'
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Sentimientos';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Menciones';
  yScaleMax: number = 100;

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA', '#FF5733', '#33A4FF']
  };

  onResize(event: UIEvent) {
    const w = event.target as Window; 
    this.view = [w.innerWidth / 2, 400];
  }

}
