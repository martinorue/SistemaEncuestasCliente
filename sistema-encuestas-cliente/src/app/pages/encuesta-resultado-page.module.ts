import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';
import { HeaderComponentModule } from '../commons/shared/header-component.module';
import { EncuestaResultadoComponentsModule } from '../commons/shared/encuesta-resultado-components.module';
import { EncuestaResultadoRoutingModule } from './encuesta-resultado-routing.module';
import { EncuestasService } from '../services/encuestas.service';
import { ResultadosService } from '../services/resultados.service';



@NgModule({
  declarations: [
    EncuestaResultadoComponent
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    EncuestaResultadoRoutingModule,
    EncuestaResultadoComponentsModule
  ],
  providers: [
    EncuestasService,
    ResultadosService,
  ]
})
export class EncuestaResultadoPageModule { }
