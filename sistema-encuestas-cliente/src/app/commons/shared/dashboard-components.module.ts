import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from '../components/bar-chart/bar-chart.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';
import { HighlightDirective } from '../../highlight.directive';
import { MatButtonModule } from '@angular/material/button';
import { ResultadoComponent } from '../components/resultado/resultado.component';
import { EncuestaComponent } from '../components/encuesta/encuesta.component';
import { DashBoardRoutingModule } from '../../pages/dashboard-routing.module';
import { HeaderComponentModule } from './header-component.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EncuestasInterceptor } from 'src/app/interceptors/encuestas-interceptor';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalOpinionesComponent } from '../components/modal-opiniones/modal-opiniones.component';
import { TextosRespuestasComponent } from '../components/textos-respuestas/textos-respuestas.component';


@NgModule({
  declarations: [
    HighlightDirective,
    PieChartComponent,
    BarChartComponent,
    EncuestaComponent,
    ResultadoComponent,
    ModalOpinionesComponent,
    TextosRespuestasComponent
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    RouterModule,
    HttpClientModule,
    DashBoardRoutingModule,
    NgxChartsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule,
  ],
  exports: [
    HighlightDirective,
    PieChartComponent,
    BarChartComponent,
    EncuestaComponent,
    ResultadoComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: EncuestasInterceptor,
    multi: true
  }],
})
export class DashboardComponentsModule { }
