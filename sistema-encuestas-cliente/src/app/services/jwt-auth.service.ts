import { Injectable } from '@angular/core';
import { LocalStorageJwt } from '../commons/static/local-storage';
import jwt_decode from 'jwt-decode';
import { IJwt } from '../domain/auth';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  constructor() { }

  login(token: any): void {
    // const decode = jwt_decode<IJwt>(token);
    // const decode: any = jwt_decode<string>(token);
	
    localStorage.setItem(LocalStorageJwt.LS_ACCESS_TOKEN, token);
    // localStorage.setItem('access_token', token);
    // localStorage.setItem(LocalStorageJwt.LS_ROLES, JSON.stringify(decode.role));
  }

  isLoggedIn(): boolean {
		const local_storage_rol = localStorage.getItem(LocalStorageJwt.LS_ROLES);

		if (!local_storage_rol) {
			return false;
		}
		const rolArray = JSON.parse(local_storage_rol) as Array<string>;
		if (rolArray.length == 0) {
			return false;
		}

		return true;
	}

	isAdmin(): boolean {
		const lsRol = localStorage.getItem(LocalStorageJwt.LS_ROLES)!;
		const rolArray = JSON.parse(lsRol) as Array<string>;
		const rolAdmin = rolArray.find((x) => x === 'ADMINISTRADOR');

		return rolAdmin !== undefined;
	}

}

