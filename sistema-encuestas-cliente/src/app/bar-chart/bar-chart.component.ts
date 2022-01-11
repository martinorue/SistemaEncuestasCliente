import { Component, HostListener, Input, OnInit } from '@angular/core';
import { BarChart } from '../domain/bar-chart';
import { Serie } from '../domain/bar-chart';
import { IResultadoML } from '../domain/resultadoEncuesta';
import { OpcionesBarChart } from '../domain/bar-chart';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() preguntaResultadosML!: IResultadoML[];
  data: BarChart[] = [];
  view: [number, number] = [700, 400];
  opciones = OpcionesBarChart;
  constructor() {
    console.log(innerWidth);

    this.view = [innerWidth / 2, 400];
  }

  ngOnInit(): void {

    let series: Serie[] = [];
    let datos: BarChart[] = [];

    this.preguntaResultadosML.map(resultado => {
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

    this.opciones.yScaleMax = this.getMaximoMenciones(series.map(serie => serie.value));
    this.data = datos
  }

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA', '#FF5733', '#33A4FF']
  };

  onResize(event: UIEvent) {
    const w = event.target as Window;
    this.view = [w.innerWidth / 2, 400];
  }

  getMaximoMenciones(seriesValues: number[]) {
    let maxCantMencions: number = Math.max(...seriesValues);
    console.log(maxCantMencions);

    return this.getScaleMax(maxCantMencions);
  }

  getScaleMax(maxCantMencion: number) {
    const numero = maxCantMencion.toString();
    const cifras = numero.length;
    let scaleMax: number = 1;
    for (let index = 0; index < cifras; index++) {
      scaleMax = scaleMax * 10;
    }
    return scaleMax;
  }

}
