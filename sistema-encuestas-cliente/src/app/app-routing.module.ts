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
		path: 'register',
    loadChildren: () => import('./pages/registro-page.module').then((m) => m.RegistroPageModule),
    canLoad: [EncuestaGuard]
	},
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard-page.module').then((m) => m.PageModule),
    canLoad: [EncuestaGuard] //si el usuario no está autorizado, no se cargan los componentes con lazy loading
  },
  {
    path: 'crear-encuesta',
    loadChildren: () => import('./pages/crear-encuesta-page.module').then((m) => m.CrearEncuestaPageModule),
    canLoad: [EncuestaGuard]
  },
  {
    path: 'encuestados',
    loadChildren: () => import('./pages/encuestados-page.module').then((m) => m.EncuestadosPageModule),
    canLoad: [EncuestaGuard]
  }, 
  {
    path: 'dashboard/editar-encuesta/:id',
    loadChildren: () => import('./pages/edicion-encuesta-page.module').then((m) => m.EdicionEncuestaPageModule),
    canLoad: [EncuestaGuard]
  },
  {
    path: 'dashboard/resultados/:id',
    loadChildren: () => import('./pages/encuesta-resultado-page.module').then((m) => m.EncuestaResultadoPageModule),
    canLoad: [EncuestaGuard]
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
