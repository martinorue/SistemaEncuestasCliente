import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEncuestaComponent } from '../commons/components/editar-encuesta/editar-encuesta.component';
import { DashboardEncuestasComponent } from './dashboard-encuestas/dashboard-encuestas.component';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardEncuestasComponent,
      },
      {
        path: 'Resultados/:id',
        component: EncuestaResultadoComponent
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
export class DashBoardRoutingModule { }
