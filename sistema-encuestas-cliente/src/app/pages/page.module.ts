import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardEncuestasComponent } from './dashboard-encuestas/dashboard-encuestas.component';
import { DashboardComponentsModule } from '../commons/shared/dashboard-components.module';
import { DashBoardRoutingModule } from './page-routing.module';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EncuestasService } from '../services/encuestas.service';
import { CrearEncuestaService } from '../services/crear-encuesta.service';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';
import { MatButtonModule } from '@angular/material/button';
import { ResultadosService } from '../services/resultados.service';
import { HeaderComponentModule } from '../commons/shared/header-component.module';


@NgModule({
  declarations: [
    DashboardEncuestasComponent,
    CrearEncuestaComponent,
    EncuestaResultadoComponent,
  ],
  imports: [
    CommonModule,
    DashboardComponentsModule,
    DashBoardRoutingModule,//page-routing.module
    CommonModule,
    HeaderComponentModule,
    MatButtonModule,
    MatNativeDateModule,
  ],
  providers: [
    MatDatepickerModule,
    MatNativeDateModule,
    EncuestasService,
    CrearEncuestaService,
    ResultadosService
  ]
})
export class PageModule { }
