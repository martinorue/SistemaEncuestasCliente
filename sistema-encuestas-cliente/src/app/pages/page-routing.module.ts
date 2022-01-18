import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
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
      // {
      //   path: 'crear-encuesta',
      //   component: CrearEncuestaComponent
      // },
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
