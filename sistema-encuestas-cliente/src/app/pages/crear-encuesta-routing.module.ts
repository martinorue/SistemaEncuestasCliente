import { NgModule } from '@angular/core';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { RouterModule, Routes } from '@angular/router';
import { VistaPreviaComponent } from './vista-previa/vista-previa.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CrearEncuestaComponent,
      },
      {
        path: 'vista-previa-encuesta',
        component: VistaPreviaComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CrearEncuestaRoutingModule { }
