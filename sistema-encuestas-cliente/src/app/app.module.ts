import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardEncuestasComponent } from './dashboard-encuestas/dashboard-encuestas/dashboard-encuestas.component';
import { EncuestaResultadoComponent } from './encuesta-resultado/encuesta-resultado.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { baseURL } from './domain/baseurl';

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


@NgModule({
  declarations: [
    AppComponent,
    DashboardEncuestasComponent,
    EncuestaResultadoComponent,
    HighlightDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    EncuestasService,
    { provide: 'BaseURL', useValue: baseURL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
