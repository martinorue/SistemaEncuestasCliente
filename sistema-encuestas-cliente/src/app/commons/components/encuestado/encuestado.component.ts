import { Component, OnInit } from '@angular/core';
import { IEncuestado } from 'src/app/domain/encuestado';
import { EncuestadoService } from 'src/app/services/encuestado.service';

@Component({
  selector: 'app-encuestado',
  templateUrl: './encuestado.component.html',
  styleUrls: ['./encuestado.component.css']
})
export class EncuestadoComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Correo', 'Celular'];
  dataSource: IEncuestado[] = [];

  constructor(
    private _encuestadoService: EncuestadoService
  ) { }

  ngOnInit(): void {
    this._encuestadoService.getEncuestados().subscribe(data => this.dataSource = data);
  }
}
