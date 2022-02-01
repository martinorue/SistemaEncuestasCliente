import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { customValidator, MODEL_REGISTER_ERRORS } from 'src/app/domain/model-message-error';
import { IRegister } from 'src/app/domain/register';
import { Location } from '@angular/common';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerUser: IRegister = <IRegister>{};
  formRegistro: FormGroup | undefined;

  constructor(
    private _location: Location,
    private _AuthService: AuthService
  ) {
    this._loadBuilder();
  }

//   export interface IRegister {
//     UsuarioID: number;
//     Email: string;
//     Clave: string;
//     RolSeguridad: string;
//     Nombre: string;
// }

  clickRegister(): void {
    const usuario: IRegister = {
      UsuarioID: 0,
      Email: this.formRegistro?.value.email,
      Clave: this.formRegistro?.value.password,
      RolSeguridad: '',
      Nombre: this.formRegistro?.value.username
    }
    const usuario_json = JSON.stringify(usuario);
    console.log(usuario_json);
    
    this._AuthService.registro(usuario);
  }

  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('repeatPassword');
    

    return password?.value === confirmPassword?.value ? null : { notmatched: true };
  };

  

  private _loadBuilder(): void {
    this.formRegistro = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        customValidator()
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', [Validators.required, Validators.email])
    }, { validators: this.passwordMatchingValidatior });
    
    this.formRegistro.get('')?.valid;
  }

  getError(controlName: string): string {
    const control = this.formRegistro?.get(controlName);
    
    if (control?.invalid && control?.touched) {
      const atributeError = MODEL_REGISTER_ERRORS.find((x) => x.formControlName == controlName);
      const validators = atributeError?.validators;
      
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