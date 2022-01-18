import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { CrearEncuestaComponent } from './pages/crear-encuesta/crear-encuesta.component';
import { EncuestaResultadoComponent } from './pages/encuesta-resultado/encuesta-resultado.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/page.module').then((m) => m.PageModule)
  },
  {
    path: 'crear-encuesta',
    loadChildren: () => import('./pages/crear-encuesta-page.module').then((m) => m.CrearEncuestaPageModule)
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
