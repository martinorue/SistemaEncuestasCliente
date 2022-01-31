import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentModule } from './header-component.module';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { EncuestadoComponent } from '../components/encuestado/encuestado.component';
import { EncuestadosRoutingModule } from '../../pages/encuestados-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EncuestasInterceptor } from 'src/app/interceptors/encuestas-interceptor';



@NgModule({
  declarations: [
    EncuestadoComponent
  ],
  imports: [
    CommonModule,
    HeaderComponentModule,
    RouterModule,
    MatTableModule,
    EncuestadosRoutingModule,
    HttpClientModule
  ],
  exports:[
    EncuestadoComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: EncuestasInterceptor,
    multi: true
  }],
})
export class EncuestadoComponentsModule { }
