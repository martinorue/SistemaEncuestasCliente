import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
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
	mostrarProgreso: boolean = false;
	respuestaHttp!: number;
	loading$ = this.loader.loading$;


	constructor(private _router: Router,
		private _authService: AuthService,
		private _jwtAuthService: JwtAuthService,
		public loader: LoadingService
		
	) { }


	dataLoginForm = {
		userName: '',
		password: ''
	};


	clickLogin(): void {
		this.mostrarProgreso = true;
		const user: IRQLogin = {
			Email: this.dataLoginForm.userName,
			Clave: this.dataLoginForm.password
		};

		this._authService.login(user).subscribe((response) => {
			this.respuestaHttp = response.status
			const token: any = response.body;

			this._jwtAuthService.login(token, user);
			void this._router.navigateByUrl('/dashboard');
		})
	}


}


