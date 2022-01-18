import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { HeaderComponentModule } from '../commons/shared/header-component.module';
import { CrearEncuestaComponentsModule } from '../commons/shared/crear-encuesta-components.module';
import { CrearEncuestaRoutingModule } from './crear-encuesta-routing.module';



@NgModule({
  declarations: [
    CrearEncuestaComponent
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    CrearEncuestaComponentsModule,
    CrearEncuestaRoutingModule
  ]
})
export class CrearEncuestaPageModule { }
