import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PathRest } from '../commons/static/path-rest';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';

@Injectable()

export class EncuestasInterceptor implements HttpInterceptor {
	constructor(private processHttpmsgService: ProcessHttpmsgService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const token = localStorage.getItem('access_token')!;
		let requestClone = req;

		//definir a quién queremos enviar los encabezados, ej: authorization
		if (!this.isLogin(req.url)) {//que agregue el authorization solo si la url no contiene login
			requestClone = req.clone({
				// withCredentials: true,
				// url: req.url.replace('http://', 'https://'),
				headers: req.headers.set('Authorization', `Bearer ${token}`)
			});
		}

		return next.handle(requestClone).pipe(catchError((error) => this.processHttpmsgService.handleError(error)));
	}

	private isLogin(url: string): boolean {
		return url.search(PathRest.GET_LOGIN) != -1;
	}

}