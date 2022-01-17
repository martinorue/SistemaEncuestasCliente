import { Component, OnInit } from '@angular/core';
import { IEncuesta } from '../../../domain/encuesta';
import { EncuestasService } from '../../../services/encuestas.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  encuestas!: IEncuesta[];

  constructor(
    private servicioEncuestas: EncuestasService
    ) { }

  ngOnInit(): void {
    this.servicioEncuestas.getEncuestas().subscribe(encuestas => this.encuestas = encuestas);
  }

}
