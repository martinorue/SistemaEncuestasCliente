import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthComponentsModule } from '../../commons/shared/auth-components.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EncuestasInterceptor } from '../../interceptors/encuestas-interceptor';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule, AuthComponentsModule
  ], 
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: EncuestasInterceptor,
    multi: true
  }],
  exports: [LoginPageComponent]
})
export class AuthModule { }
