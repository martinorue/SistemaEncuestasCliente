import { Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';

export const routes: Routes = [
    {path: 'Encuestas/:id', component: EncuestaResultadoComponent},
    // {path: '', component: AppComponent, pathMatch: 'full'}
];