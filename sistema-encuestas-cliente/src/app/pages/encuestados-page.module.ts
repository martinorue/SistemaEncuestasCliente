import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentModule } from '../commons/shared/header-component.module';
import { EncuestadoComponentsModule } from '../commons/shared/encuestado-components.module';
import { EncuestadosComponent } from './encuestados/encuestados.component';
import { EncuestadosRoutingModule } from './encuestados-routing.module';
import { EncuestadoService } from '../services/encuestado.service';

@NgModule({
  declarations: [
    EncuestadosComponent
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    EncuestadoComponentsModule,
    EncuestadosRoutingModule
  ],
  providers: [
    EncuestadoService
  ]
})
export class EncuestadosPageModule { }
