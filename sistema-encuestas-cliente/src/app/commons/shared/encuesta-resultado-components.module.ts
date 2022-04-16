import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResultadoComponent } from '../components/resultado/resultado.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';
import { ModalOpinionesComponent } from '../components/modal-opiniones/modal-opiniones.component';
import { TextosRespuestasComponent } from '../components/textos-respuestas/textos-respuestas.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EncuestasInterceptor } from '../../interceptors/encuestas-interceptor';



@NgModule({
  declarations: [
    ResultadoComponent,
    PieChartComponent,
    BarChartComponent,
    ModalOpinionesComponent,
    TextosRespuestasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxChartsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    FlexLayoutModule,
  ],
  exports: [
    ResultadoComponent,
    PieChartComponent,
    BarChartComponent,
    ModalOpinionesComponent,
    TextosRespuestasComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EncuestasInterceptor,
      multi: true
    },
  ]
})
export class EncuestaResultadoComponentsModule { }
