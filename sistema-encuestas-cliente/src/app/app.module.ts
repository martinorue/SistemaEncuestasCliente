import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EncuestasInterceptor } from './interceptors/encuestas-interceptor';
import { EncuestaGuard } from './guards/encuesta.guard';
import { AuthModule } from './pages/auth/auth.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EncuestasService } from './services/encuestas.service';
import { CrearEncuestaService } from './services/crear-encuesta.service';
import { ResultadosService } from './services/resultados.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EncuestasInterceptor,
      multi: true
    }
    // ,EncuestaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
