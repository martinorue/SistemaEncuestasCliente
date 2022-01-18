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
import { EncuestasService } from '../../services/encuestas.service';
import { ResultadoComponent } from '../components/resultado/resultado.component';
import { EncuestaComponent } from '../components/encuesta/encuesta.component';
import { ResultadosService } from '../../services/resultados.service';
import { DashBoardRoutingModule } from '../../pages/page-routing.module';
import { HeaderComponentModule } from './header-component.module';


@NgModule({
  declarations: [
    HighlightDirective,
    PieChartComponent,
    BarChartComponent,
    EncuestaComponent,
    ResultadoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashBoardRoutingModule,
    HeaderComponentModule,
    NgxChartsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FlexLayoutModule,
  ],
  exports: [
    HighlightDirective,
    PieChartComponent,
    BarChartComponent,
    EncuestaComponent,
    ResultadoComponent,
  ]
})
export class DashboardComponentsModule { }
