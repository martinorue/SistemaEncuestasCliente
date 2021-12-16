import { Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { DashboardEncuestasComponent } from './dashboard-encuestas/dashboard-encuestas/dashboard-encuestas.component';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';

export const routes: Routes = [
    { path: 'Encuestas/:id', component: EncuestaResultadoComponent },
    //{ path: 'app-encuesta-resultado', component: EncuestaResultadoComponent },
    { path: '', component: DashboardEncuestasComponent, pathMatch: 'full' }
];