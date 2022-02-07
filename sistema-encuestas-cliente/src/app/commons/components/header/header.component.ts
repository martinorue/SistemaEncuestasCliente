import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _jwtAuthService: JwtAuthService) { }
  salir(){
    this._jwtAuthService.logout()
  }
}
