import { Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { DashboardEncuestasComponent } from './dashboard-encuestas/dashboard-encuestas/dashboard-encuestas.component';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'Resultados/:id', component: EncuestaResultadoComponent },
    { path: '', component: LoginComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardEncuestasComponent },
    { path: 'login', component: LoginComponent }
];