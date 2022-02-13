import { environment } from './../../../environments/environment';
export class PathRest {
	static readonly GET_LOGIN = environment.baseUri + 'api/login';
	static readonly GET_DASHBOARD = environment.baseUri + '/dashboard';
}