import { Component, Input, OnInit } from '@angular/core';
import { IPieChart } from '../domain/pie-chart';
import { IResultado } from '../domain/resultadoEncuesta';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  constructor() {

  }

  data: IPieChart[] = [];
  @Input() preguntaResultados!: IResultado[];
  view: [number, number] = [300, 175];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendTitle: string = "";
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#AAAAAA', '#C7B42C', '#A10A28']
  };

  ngOnInit(): void {
   
    let datos: IPieChart[] = [];

    this.preguntaResultados.map(resultado => {
      datos.push({
        name: resultado.Texto,
        value: resultado.Valor
      });
    });

    this.data = datos;
    
  }



}
