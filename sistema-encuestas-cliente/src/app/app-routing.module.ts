import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaGuard } from './guards/encuesta.guard';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';

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
    loadChildren: () => import('./pages/dashboard-page.module').then((m) => m.PageModule),
    //canLoad: [EncuestaGuard] //si el usuario no está autorizado, no se cargan los componentes con lazy loading
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
