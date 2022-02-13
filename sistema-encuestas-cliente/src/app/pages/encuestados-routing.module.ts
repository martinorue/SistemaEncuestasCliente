import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestadosComponent } from './encuestados/encuestados.component';


export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EncuestadosComponent,
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
export class EncuestadosRoutingModule { }
