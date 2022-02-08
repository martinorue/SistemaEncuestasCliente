import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IRegister } from '../../../domain/register';
import { Location } from '@angular/common';
import { ErrorStateMatcher } from '@angular/material/core';
import { RegistrarService } from '../../../services/registrar.service';
import { MessageService } from '../../../services/message.service';
import { MODEL_REGISTER_ERRORS } from './model-message-error';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerUser: IRegister = <IRegister>{};
  formRegistro: FormGroup | undefined;
  errMess!: string;
  respuesta!: IRegister;
  respuestaHttp!: number;
  noMatch!: boolean;

  constructor(
    private _location: Location,
    private _registrarService: RegistrarService,
    private _messageService: MessageService
  ) {
    this._loadBuilder();
  }

  clickRegister(): void {
    const usuario: IRegister = {
      UsuarioID: 0,
      Email: this.formRegistro?.value.email,
      Clave: this.formRegistro?.value.password,
      RolSeguridad: 'ADMINISTRADOR',
      Nombre: this.formRegistro?.value.username
    }
    const usuario_json = JSON.stringify(usuario);
    this.guardarUsuario(usuario_json)
    
    
  }

  guardarUsuario(usuario_json: string) {
    this._registrarService.registro(usuario_json)
      .subscribe(response => {this.respuestaHttp = response.status
        if(this.respuestaHttp == 200){
          this._messageService.showInfo('Registro exitoso', 'top right');
          this.formRegistro?.reset();
        }
      })
    
  }

  private _loadBuilder(): void {
    this.formRegistro = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(8), this.customValidator()]),
    });

    this.formRegistro.get('')?.valid;
  }

  customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        
        const password = this.formRegistro?.get('password');
        
        const confirmPassword = this.formRegistro?.get('repeatPassword');

        return password?.value === confirmPassword?.value ? null : { notmatched: true };
    };
}

  getError(controlName: string): string {
    const control = this.formRegistro?.get(controlName);

    if (control?.invalid && control?.touched) {
      const atributeError = MODEL_REGISTER_ERRORS.find((x) => x.formControlName == controlName);
      
      const validator = atributeError?.validators.find(
        (validator) => control.errors![validator.name]
      );
      return validator!.message;
    }
    return '';
  }

  get usernameAbstract(): AbstractControl | null | undefined {
    return this.formRegistro?.get('username');
  }

  volver(): void {
    this._location.back();
  }

  matcher = new ErrorStateMatcher();

}
