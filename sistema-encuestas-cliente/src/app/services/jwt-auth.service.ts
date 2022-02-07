import { Injectable } from '@angular/core';
import { LocalStorageJwt } from '../commons/static/local-storage';
import jwt_decode from 'jwt-decode';
import { IJwt, IRQLogin } from '../domain/auth';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  constructor() { }

  login(token: any, user: IRQLogin): void {
    // const decode = jwt_decode<IJwt>(token);
    // const decode: any = jwt_decode<string>(token);
	
    localStorage.setItem(LocalStorageJwt.LS_ACCESS_TOKEN, token);
    // localStorage.setItem(LocalStorageJwt.LS_USER, user.Email);
    // localStorage.setItem('access_token', token);
    // localStorage.setItem(LocalStorageJwt.LS_ROLES, JSON.stringify(decode.role));
  }

  logout(){
	localStorage.removeItem('access_token');
	localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
		const token = localStorage.getItem(LocalStorageJwt.LS_ACCESS_TOKEN);
		// const user = localStorage.getItem(LocalStorageJwt.LS_USER);

		if (!token) {
			return false;
		}
		return true;
	}

	// isAdmin(): boolean {
	// 	const lsRol = localStorage.getItem(LocalStorageJwt.LS_ROLES)!;
	// 	const rolArray = JSON.parse(lsRol) as Array<string>;
	// 	const rolAdmin = rolArray.find((x) => x === 'ADMINISTRADOR');

	// 	return rolAdmin !== undefined;
	// }

}

