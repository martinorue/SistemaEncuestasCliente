import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthModule } from './pages/auth/auth.module';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEsUY from '@angular/common/locales/es-UY';

registerLocaleData(localeEsUY, 'es-UY');


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
  bootstrap: [AppComponent],
  providers: [ { provide: LOCALE_ID, useValue: 'es-UY' } ],
})
export class AppModule { }
