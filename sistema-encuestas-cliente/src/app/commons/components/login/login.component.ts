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
		userName: '',
		password: ''
	};


	clickLogin(): void {
		
		const user: IRQLogin = {
			Email: this.dataLoginForm.userName,
			Clave: this.dataLoginForm.password
		};

		console.log(user);
		
		this._authService.login(user).subscribe((data) => {
			//this._jwtAuthService.login(data.accessToken);
			void this._router.navigateByUrl('/dashboard');
		});

		//void this._router.navigateByUrl('/dashboard');
	}

}
