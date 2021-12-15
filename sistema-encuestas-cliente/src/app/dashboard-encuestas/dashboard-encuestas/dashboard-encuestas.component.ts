import { Component, Inject, OnInit } from '@angular/core';
import { Encuesta } from 'src/app/domain/encuesta';
import { EncuestasService } from 'src/app/services/encuestas.service';

@Component({
  selector: 'app-dashboard-encuestas',
  templateUrl: './dashboard-encuestas.component.html',
  styleUrls: ['./dashboard-encuestas.component.css']
})
export class DashboardEncuestasComponent implements OnInit {

  encuestas!: Encuesta[];

  constructor(private servicioEncuestas: EncuestasService, @Inject('BaseURL') private BaseURL: string) { }

  ngOnInit(): void {
    this.servicioEncuestas.getEncuestas().subscribe(encuestas => this.encuestas = encuestas);
  }

}
