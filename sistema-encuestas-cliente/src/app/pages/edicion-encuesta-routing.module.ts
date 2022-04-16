import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionEncuestaComponent } from './edicion-encuesta/edicion-encuesta.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EdicionEncuestaComponent,
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class EdicionEncuestaRoutingModule { }
