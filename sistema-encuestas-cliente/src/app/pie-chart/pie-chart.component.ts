import { Component, Input, OnInit } from '@angular/core';
import { PieChart } from '../domain/pie-chart';
import { Resultado } from '../domain/resultado';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  constructor() {

  }

  data: PieChart[] = [];
  @Input() preguntaResultados!: Resultado[];
  //view: [number, number] = [600, 350];

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
   
    let result: PieChart[] = [];

    this.preguntaResultados.map(resultado => {
      result.push(new PieChart(resultado.Texto, resultado.Valor));
    })
    
    this.data = result;
  }



}
