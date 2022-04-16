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
		localStorage.setItem(LocalStorageJwt.LS_ACCESS_TOKEN, token);
	}

	logout() {
		localStorage.removeItem('access_token');
	}

	isLoggedIn(): boolean {
		const token = localStorage.getItem(LocalStorageJwt.LS_ACCESS_TOKEN);
		let token_vigente: boolean = true;
		if (token != null) {
			const decode = jwt_decode<IJwt>(token);
			const exp = decode.exp;
			if (Date.now() >= exp * 1000) {
				return token_vigente = false;
			}
		}

		if (!token || !token_vigente) {
			return false;
		}
		return true;
	}

}

