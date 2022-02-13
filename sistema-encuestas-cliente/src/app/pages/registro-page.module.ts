import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './auth/register-page/register-page.component';
import { HeaderComponentModule } from '../commons/shared/header-component.module';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponentsModule } from '../commons/shared/registro-components.module';



@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    HeaderComponentModule,
    RegistroComponentsModule,
    RegistroRoutingModule
  ]
})
export class RegistroPageModule { }
