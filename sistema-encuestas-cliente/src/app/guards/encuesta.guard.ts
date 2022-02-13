import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtAuthService } from '../services/jwt-auth.service';

@Injectable({
  providedIn: 'root'
})
export class EncuestaGuard implements CanLoad {
  constructor(
    private _jwtAuthService: JwtAuthService,
    private _router: Router
  ) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const isLoggedIn = this._jwtAuthService.isLoggedIn();

    if (!isLoggedIn) {
      void this._router.navigateByUrl('/login');
    }
    return isLoggedIn;
  }
    
  
  
}

