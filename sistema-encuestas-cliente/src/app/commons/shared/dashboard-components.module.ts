import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighlightDirective } from '../../highlight.directive';
import { MatButtonModule } from '@angular/material/button';
import { EncuestaComponent } from '../components/encuesta/encuesta.component';
import { DashBoardRoutingModule } from '../../pages/dashboard-routing.module';
import { HeaderComponentModule } from './header-component.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EncuestasInterceptor } from '../../interceptors/encuestas-interceptor';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    HighlightDirective,
    EncuestaComponent,
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    RouterModule,
    HttpClientModule,
    DashBoardRoutingModule,
    MatMenuModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
  exports: [
    HighlightDirective,
    EncuestaComponent,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: EncuestasInterceptor,
    multi: true
  }],
})
export class DashboardComponentsModule { }
