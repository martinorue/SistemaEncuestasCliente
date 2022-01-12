import { Component, Input, OnInit } from '@angular/core';
import { IPieChart, OpcionesPieChart } from '../domain/pie-chart';
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
  @Input() preguntaResultados: IResultado[] | null = [];
  view: [number, number] = [300, 175];
  opciones = OpcionesPieChart;

  colorScheme = {
    domain: ['#5AA454', '#AAAAAA', '#C7B42C', '#A10A28']
  };

  ngOnInit(): void {
   
    let datos: IPieChart[] = [];

    this.preguntaResultados?.map(resultado => {
      datos.push({
        name: resultado.Texto,
        value: resultado.Valor
      });
    });

    this.data = datos;
    
  }

}
