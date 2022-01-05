import {
	HttpErrorResponse,
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MessageService } from '../services/message.service';
// import { PathRest } from './../static/path-rest';
@Injectable()
export class EncuestasInterceptor implements HttpInterceptor {
	constructor(private messageService: MessageService) {}

	intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		// const token = localStorage.getItem('acces_token')!;
		// let requestClone = req;

		//definir a quién queremos enviar los encabezados, ej: authorization
		// if (!this.isLogin(req.url)) {//que agregue el authorization solo si la url no contiene login
		// 	requestClone = req.clone({
		// 		headers: req.headers.set('Authorization', `Bearer ${token}`)
		// 	});
		// }

		//return next.handle(requestClone).pipe(catchError((error) => this.errorHandler(error)));
		
        
        return next.handle(req).pipe(catchError((error) => this.errorHandler(error)));
        //console.log('*********', req);
        //return next.handle(req);
	}

	// private isLogin(url: string): boolean {
	// 	return url.search(PathRest.GET_LOGIN) != -1;
	// }

	private errorHandler(error: HttpErrorResponse): Observable<never> {
		if (error instanceof HttpErrorResponse) {
			if (error.error instanceof ErrorEvent) {
				this.messageService.showError('Error de conexión', 'top right');
			} else {
				if (error.status === 401) {
					this.messageService.showError('No cuenta con permisos para ingresar', 'top right');
				} else {
					this.messageService.showError('Error de servidor', 'top right');
				}
			}
		} else {
			this.messageService.showError('Error', 'top right');
		}
		return throwError(error);
	}
}