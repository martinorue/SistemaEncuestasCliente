import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface IAtribute {
    formControlName: string;
    validators: IValidator[];
}

export interface IValidator {
    name: string;
    message: string;
}



export function customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
		return null;
    };
}

export const MODEL_REGISTER_ERRORS: IAtribute[] = [
    {
        formControlName: 'username',
        validators: [
            {
                name: 'required',
                message: 'El usuario es requerido'
            },
            {
                name: 'minlength',
                message: 'La cantidad minima es 5'
            },
            
        ]
    },
    {
        formControlName: 'password',
        validators: [
            {
                name: 'required',
                message: 'Ingrese contraseña'
            },
            {
                name: 'minlength',
                message: 'La cantidad mínima es 8'
            },
        ]
    }
];