import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { customValidator, MODEL_REGISTER_ERRORS } from 'src/app/domain/model-message-error';
import { IRegister } from 'src/app/domain/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

//   export interface IRegister {
//     UsuarioID: number;
//     Email: string;
//     Clave: string;
//     RolSeguridad: string;
//     Nombre: string;
// }

  registerUser: IRegister = <IRegister>{};
	myRegisterForm: FormGroup | undefined;

	constructor() {
		this._loadBuilder();
	}

	clickRegister(): void {
		if (this.myRegisterForm?.valid) {
			console.log('******VALIDADO*****');
		} else {
			console.log('******SIGUE VALIDANDO*****');
		}
	}

	private _loadBuilder(): void {
		this.myRegisterForm = new FormGroup({
			username: new FormControl('', [
				Validators.required,
				Validators.minLength(5),
				customValidator()
			]),
			password: new FormControl('', [Validators.required]),
			repeatPassword: new FormControl('')
		});
		this.myRegisterForm.get('')?.valid;
	}

	getError(controlName: string): string {
		const control = this.myRegisterForm?.get(controlName);
		if (control?.invalid && control?.touched) {
			const atributeError = MODEL_REGISTER_ERRORS.find((x) => x.formControlName == controlName);
			const validator = atributeError?.validators.find(
				(validator) => control.errors![validator.name]
			);
			return validator!.message;
		}
		// if (control?.invalid && control?.hasError('required')) {
		// 	return 'El usuario es requerido';
		// }

		// if (control?.invalid && control?.hasError('minlength')) {
		// 	return 'La cantidad minima es 5';
		// }
		return '';
	}

	get usernameAbstract(): AbstractControl | null | undefined {
		return this.myRegisterForm?.get('username');
	}

}
