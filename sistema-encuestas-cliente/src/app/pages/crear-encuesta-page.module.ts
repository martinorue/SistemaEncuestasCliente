import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { HeaderComponentModule } from '../commons/shared/header-component.module';
import { CrearEncuestaComponentsModule } from '../commons/shared/crear-encuesta-components.module';
import { CrearEncuestaRoutingModule } from './crear-encuesta-routing.module';
import { VistaPreviaComponent } from './vista-previa/vista-previa.component';


@NgModule({
  declarations: [
    CrearEncuestaComponent,
    VistaPreviaComponent
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    CrearEncuestaComponentsModule,
    CrearEncuestaRoutingModule
  ]
})
export class CrearEncuestaPageModule { }
