import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
	@ViewChild('myFormLogin') myFormLogin: NgForm | undefined;


  constructor(private _router: Router) { }

  dataLoginForm = {
		userName: '',
		password: ''
	};

  

  clickLogin(): void {
		// const user: IRQLogin = {
		// 	username: this.dataLoginForm.userName,
		// 	password: this.dataLoginForm.password
		// };
		// this._loginService.login(user).subscribe((data) => {
		// 	this._jwtAuthService.login(data.accessToken);
		// 	void this._router.navigateByUrl('/dashboard');
		// });

    void this._router.navigateByUrl('/dashboard');
	}

}
