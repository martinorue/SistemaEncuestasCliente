import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarEncuestaComponent } from '../components/editar-encuesta/editar-encuesta.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { HeaderComponentModule } from './header-component.module';
import { CrearEncuestaComponentsModule } from './crear-encuesta-components.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EncuestasInterceptor } from '../../interceptors/encuestas-interceptor';
import { EdicionEncuestaRoutingModule } from 'src/app/pages/edicion-encuesta-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    EditarEncuestaComponent,
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    HttpClientModule,
    RouterModule,
    CrearEncuestaComponentsModule,
    EdicionEncuestaRoutingModule,
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
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    EditarEncuestaComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EncuestasInterceptor,
      multi: true
    },
    MatDatepickerModule,
    MatNativeDateModule,
    {provide: MAT_DATE_LOCALE, useValue: 'es-UY'},
  ]
})
export class EdicionEncuestaComponentsModule { }
