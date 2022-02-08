
export interface IAtribute {
    formControlName: string;
    validators: IValidator[];
}

export interface IValidator {
    name: string;
    message: string;
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
        formControlName: 'email',
        validators: [
            {
                name: 'required',
                message: 'Ingrese una dirección de correo válida'
            },
            {
                name: 'minlength',
                message: 'La cantidad mínima es 8'
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
    },
    {
        formControlName: 'repeatPassword',
        validators: [
            {
                name: 'required',
                message: 'Repita la contraseña'
            },
            {
                name: 'minlength',
                message: 'La cantidad mínima es 8'
            },
            {
                name: 'notmatched',
                message: 'Las contraseñas no coinciden'
            },
        ]
    },
];