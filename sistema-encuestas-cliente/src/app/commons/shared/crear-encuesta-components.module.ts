import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevaEncuestaComponent } from '../components/nueva-encuesta/nueva-encuesta.component';
import { VistaPreviaEncuestaComponent } from '../components/vista-previa-encuesta/vista-previa-encuesta.component';
import { HeaderComponentModule } from './header-component.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { AgregarPreguntaComponent } from '../components/agregar-pregunta/agregar-pregunta.component';


@NgModule({
  declarations: [
    NuevaEncuestaComponent,
    AgregarPreguntaComponent,
    VistaPreviaEncuestaComponent
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    MatCardModule,
    MatIconModule,
    DragDropModule,
    MatSlideToggleModule,
    FormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports:[
    NuevaEncuestaComponent,
    VistaPreviaEncuestaComponent
  ],
  providers:[
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class CrearEncuestaComponentsModule { }
