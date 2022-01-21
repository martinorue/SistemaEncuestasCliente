import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IRQLogin } from '../../../domain/auth';
import { AuthService } from '../../../services/auth.service';
import { JwtAuthService } from '../../../services/jwt-auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	@ViewChild('myFormLogin') myFormLogin: NgForm | undefined;


	constructor(private _router: Router,
		private _authService: AuthService,
		private _jwtAuthService: JwtAuthService
	) { }


	dataLoginForm = {
		userName: 'rivero.info@gmail.com',
		password: '123456'
	};


	clickLogin(): void {

		const user: IRQLogin = {
			Email: this.dataLoginForm.userName,
			Clave: this.dataLoginForm.password
		};

		// console.log(user);

		this._authService.login(user).subscribe((response) => {
			console.log(response.body);

			const token: any = response.body;

			console.log(token);
			
			this._jwtAuthService.login(token);

			void this._router.navigateByUrl('/dashboard');
		});

	}

}
