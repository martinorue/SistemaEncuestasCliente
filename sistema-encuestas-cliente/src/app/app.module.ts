import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardEncuestasComponent } from './dashboard-encuestas/dashboard-encuestas/dashboard-encuestas.component';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { baseURL } from './domain/baseurl';

import { FlexLayoutModule } from '@angular/flex-layout';

/*Angular Material*/
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EncuestasService } from './services/encuestas.service';
import { HighlightDirective } from './highlight.directive';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EncuestasInterceptor } from './interceptors/encuestas-interceptor';

/*ngx-Charts*/
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EncuestaGuard } from './guards/encuesta.guard';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardEncuestasComponent,
    EncuestaResultadoComponent,
    HighlightDirective,
    HeaderComponent,
    LoginComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxChartsModule,
  ],
  providers: [
    EncuestasService,
    // { provide: 'BaseURL', useValue: baseURL },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EncuestasInterceptor,
      multi: true
    }, EncuestaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
