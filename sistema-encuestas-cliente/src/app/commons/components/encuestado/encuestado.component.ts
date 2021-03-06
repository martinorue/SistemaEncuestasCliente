import { Component, OnInit } from '@angular/core';
import { IEncuestado } from '../../../domain/encuestado';
import { EncuestadoService } from '../../../services/encuestado.service';
import { LoadingService } from '../../../services/loading.service';

@Component({
  selector: 'app-encuestado',
  templateUrl: './encuestado.component.html',
  styleUrls: ['./encuestado.component.css']
})
export class EncuestadoComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Correo', 'Celular'];
  dataSource: IEncuestado[] = [];

  loading$ = this.loader.loading$;


  constructor(
    private _encuestadoService: EncuestadoService,
    public loader: LoadingService
  ) { }

  ngOnInit(): void {
    this._encuestadoService.getEncuestados().subscribe(data => this.dataSource = data);
  }
}
