import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IRespuestaTL } from 'src/app/domain/respuestaTL';

@Component({
  selector: 'app-modal-opiniones',
  templateUrl: './modal-opiniones.component.html',
  styleUrls: ['./modal-opiniones.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalOpinionesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalOpinionesComponent>,
    @Inject(MAT_DIALOG_DATA) public listRespuestasTL: IRespuestaTL[]
    ) { }

  ngOnInit(): void {
  }

  cerrarDialog(): void{
    this.dialogRef.close();
  }

}
