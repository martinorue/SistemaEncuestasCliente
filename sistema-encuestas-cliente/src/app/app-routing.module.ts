import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaGuard } from './guards/encuesta.guard';
import { RegistroGuard } from './guards/registro.guard';
import { LoginPageComponent } from './pages/auth/login-page/login-page.component';
import { RegisterPageComponent } from './pages/auth/register-page/register-page.component';

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
		component: RegisterPageComponent,
    canActivate: [RegistroGuard]
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
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
