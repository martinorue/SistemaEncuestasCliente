import { Component, OnInit } from '@angular/core';
import { CrearEncuestaService } from 'src/app/services/crear-encuesta.service';
import { IEncuesta } from '../../../domain/encuesta';
import { EncuestasService } from '../../../services/encuestas.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {
  encuestas!: IEncuesta[];
  errMess!: string;

  constructor(
    private servicioEncuestas: EncuestasService,
    private _crearEncuestaService: CrearEncuestaService,
  ) { }

  ngOnInit(): void {
    this.servicioEncuestas.getEncuestas().subscribe(encuestas => this.encuestas = encuestas);
  }

  publicarEncuesta(encuesta: IEncuesta) {
    encuesta.Estado = 'PUBLICADA';
    this._crearEncuestaService.submitEncuestaEditada(encuesta)
      .subscribe(respuestaSubmit => encuesta = respuestaSubmit,
        errmess => this.errMess = <any>errmess);
  }

}
