import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: CrearEncuestaComponent,
      }
      // {
      //   path: 'crear-encuesta',
      //   component: CrearEncuestaComponent
      // }
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
