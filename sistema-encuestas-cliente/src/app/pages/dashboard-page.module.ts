import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEncuestasComponent } from './dashboard-encuestas/dashboard-encuestas.component';
import { DashboardComponentsModule } from '../commons/shared/dashboard-components.module';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { EncuestasService } from '../services/encuestas.service';
import { CrearEncuestaService } from '../services/crear-encuesta.service';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';
import { MatButtonModule } from '@angular/material/button';
import { ResultadosService } from '../services/resultados.service';
import { HeaderComponentModule } from '../commons/shared/header-component.module';


@NgModule({
  declarations: [
    DashboardEncuestasComponent,
    EncuestaResultadoComponent,
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    DashboardComponentsModule,
    DashBoardRoutingModule,
    MatButtonModule,
  ],
  providers: [
    EncuestasService,
    CrearEncuestaService,
    ResultadosService,
  ]
})
export class PageModule { }
