import { Component, Input, OnInit } from '@angular/core';
import { BarChart } from '../../../domain/bar-chart';
import { Serie } from '../../../domain/bar-chart';
import { IResultadoML } from '../../../domain/resultadoEncuesta';
import { OpcionesBarChart } from '../../../domain/bar-chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  @Input() preguntaResultadosML: IResultadoML[] | null = [];
  data: BarChart[] = [];
  view: [number, number] = [700, 400];
  opciones = OpcionesBarChart;

  constructor() {
    console.log(innerWidth);
    if (innerWidth > 960) {
      this.view = [innerWidth / 2, 400];
    } else {
      this.view = [innerWidth / 1.2, 400];
    }

  }

  ngOnInit(): void {

    let series: Serie[] = [];
    let datos: BarChart[] = [];

    this.preguntaResultadosML?.map(resultado => {

      const dato: BarChart = {
        name: resultado.Texto,
        series: []
      }

      datos.push(dato);

      const serie: Serie = {
        name: resultado.Etiqueta,
        value: resultado.Valor
      }

      dato.series.push(serie);

    })

    this.opciones.yScaleMax = this.getMaximoMenciones(series.map(serie => serie.value));
    this.data = datos
  }

  // colorScheme = {
  //   name: "verde", value: '#5AA454', name: "b", value: '#C7B42C', c: '#AAAAAA', d: '#FF5733', e: '#33A4FF'
  // };

  barChartcustomColors =
    [
      { name: "ATENCION", value: 'rgb(238, 100, 144)' },
      { name: "COMIDA", value: 'rgb(0, 172, 193)' },
      { name: "AMBIENTE", value: 'rgb(233, 107, 86)' },
      { name: "VINO", value: 'rgb(168, 56, 93)' },
      { name: "PRECIO", value: 'rgb(250, 160, 38)' },
    ]

  onResize(event: UIEvent) {
    const w = event.target as Window;
    this.view = [w.innerWidth / 2, 400];
  }

  getMaximoMenciones(seriesValues: number[]) {

    if (seriesValues.length > 0) {
      let maxCantMencions: number = Math.max(...seriesValues);
      return this.getScaleMax(maxCantMencions);
    } else return 0;
  }

  getScaleMax(maxCantMencion: number) {

    if (maxCantMencion % 10 == 0) {
      return maxCantMencion;
    } else {
      while (maxCantMencion % 10 != 0) {
        maxCantMencion++;
      }
    }
    return maxCantMencion;
  }

}
