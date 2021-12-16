import { Component, Inject, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/domain/encuesta';
import { ResultadoEncuesta } from 'src/app/domain/resultadoEncuesta';
import { EncuestasService } from 'src/app/services/encuestas.service';
import { ResultadosService } from 'src/app/services/resultados.service';

@Component({
  selector: 'app-dashboard-encuestas',
  templateUrl: './dashboard-encuestas.component.html',
  styleUrls: ['./dashboard-encuestas.component.css']
})
export class DashboardEncuestasComponent implements OnInit {

  encuestas!: Encuesta[];
  resultadoEncuesta!: ResultadoEncuesta;


  constructor(private servicioEncuestas: EncuestasService, private resultadosService: ResultadosService, @Inject('BaseURL') private BaseURL: string) { }

  ngOnInit(): void {
    this.servicioEncuestas.getEncuestas().subscribe(encuestas => this.encuestas = encuestas);
  }

  verResultados(id: number) {
    this.resultadosService.getResultados(id).subscribe(resultadoEncuesta => this.resultadoEncuesta = resultadoEncuesta);
  }

}
