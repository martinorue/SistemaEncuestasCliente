import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { HighlightDirective } from '../../highlight.directive';
import { VistaPreviaEncuestaComponent } from '../../commons/components/vista-previa-encuesta/vista-previa-encuesta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EncuestasService } from '../../services/encuestas.service';
import { CrearEncuestaService } from '../../services/crear-encuesta.service';
import { ResultadoComponent } from '../components/resultado/resultado.component';
import { EncuestaComponent } from '../components/encuesta/encuesta.component';
import { NuevaEncuestaComponent } from '../components/nueva-encuesta/nueva-encuesta.component';
import { ResultadosService } from '../../services/resultados.service';
import { DashBoardRoutingModule } from '../../pages/page-routing.module';


@NgModule({
  declarations: [
    HighlightDirective,
    HeaderComponent,
    PieChartComponent,
    BarChartComponent,
    EncuestaComponent,
    ResultadoComponent,
    VistaPreviaEncuestaComponent,
    NuevaEncuestaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashBoardRoutingModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    FlexLayoutModule,
  ],
  exports: [
    HighlightDirective,
    HeaderComponent,
    PieChartComponent,
    BarChartComponent,
    EncuestaComponent,
    ResultadoComponent,
    VistaPreviaEncuestaComponent,
    NuevaEncuestaComponent
  ],
  providers:[
    MatDatepickerModule,
    MatNativeDateModule,
    EncuestasService,
    CrearEncuestaService,
    ResultadosService
  ]
})
export class DashboardComponentsModule { }
