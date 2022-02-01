import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { customValidator, MODEL_REGISTER_ERRORS } from 'src/app/domain/model-message-error';
import { IRegister } from 'src/app/domain/register';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerUser: IRegister = <IRegister>{};
  myRegisterForm: FormGroup | undefined;

  constructor(
    private _location: Location,
  ) {
    this._loadBuilder();
  }

  clickRegister(): void {
    console.log('holis');
  }

  passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('repeatPassword');
    

    return password?.value === confirmPassword?.value ? null : { notmatched: true };
  };

  

  private _loadBuilder(): void {
    this.myRegisterForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        customValidator()
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repeatPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    }, { validators: this.passwordMatchingValidatior });
    
    this.myRegisterForm.get('')?.valid;
  }

  getError(controlName: string): string {
    const control = this.myRegisterForm?.get(controlName);
    
    if (control?.invalid && control?.touched) {
      const atributeError = MODEL_REGISTER_ERRORS.find((x) => x.formControlName == controlName);
      const validators = atributeError?.validators;
      console.log(validators);
      
      const validator = atributeError?.validators.find(
        
        (validator) => control.errors![validator.name]
      );
      
      return validator!.message;
    }
    return '';
  }

  get usernameAbstract(): AbstractControl | null | undefined {
    return this.myRegisterForm?.get('username');
  }

  volver(): void {
    this._location.back();
  }

}
