import { Component, Input, OnInit } from '@angular/core';
import { COLOR_SCHEME, IPieChart, OPCIONES_PIE_CHART} from '../../../domain/pie-chart';
import { IResultado } from '../../../domain/resultadoEncuesta';

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
  opciones = OPCIONES_PIE_CHART;
  colorScheme = COLOR_SCHEME;

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
