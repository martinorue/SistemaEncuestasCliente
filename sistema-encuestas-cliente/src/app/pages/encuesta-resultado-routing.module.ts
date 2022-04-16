import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EncuestaResultadoComponent,
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
export class EncuestaResultadoRoutingModule { }
