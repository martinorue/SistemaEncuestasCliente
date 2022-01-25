import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdicionEncuestaComponent } from './edicion-encuesta/edicion-encuesta.component';
import { HeaderComponentModule } from '../commons/shared/header-component.module';
import { EdicionEncuestaRoutingModule } from './edicion-encuesta-routing.module';
import { EdicionEncuestaComponentsModule } from '../commons/shared/edicion-encuesta-components.module';
import { EncuestasService } from '../services/encuestas.service';



@NgModule({
  declarations: [
    EdicionEncuestaComponent,
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    EdicionEncuestaRoutingModule,
    EdicionEncuestaComponentsModule
  ],
  providers: [
    EncuestasService,
  ]
})
export class EdicionEncuestaPageModule { }
