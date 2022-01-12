import { Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { DashboardEncuestasComponent } from './dashboard-encuestas/dashboard-encuestas/dashboard-encuestas.component';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';
import { EncuestaGuard } from './guards/encuesta.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'Resultados/:id', component: EncuestaResultadoComponent },
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardEncuestasComponent, canActivate: [EncuestaGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'crear-encuesta', component: CrearEncuestaComponent }
];