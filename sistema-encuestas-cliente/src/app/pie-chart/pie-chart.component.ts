import { Component, Input, OnInit } from '@angular/core';
import { PieChart } from '../domain/pie-chart';
import { ResultadoEncuesta } from '../domain/resultadoEncuesta';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  constructor() {

  }

  data: PieChart[] = [];
  view: [number, number] = [700, 400];
  @Input() resultadoEncuesta!: ResultadoEncuesta;

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  ngOnInit(): void {
    let data_chart: PieChart[] = [];
    this.resultadoEncuesta.Preguntas.map(pregunta => {
      if (pregunta.Tipo == 'TEXTOLIBRE') {
        pregunta.Resultados.map(resultado => 
          data_chart.push(new PieChart(resultado.Texto, resultado.Valor)));
      }
    });
    
    this.data = data_chart;

  }



}
