import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './auth/register-page/register-page.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RegisterPageComponent,
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

export class RegistroRoutingModule { }
