import { LoginService } from './login-service.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private loginService: LoginService) { }

  canActivate(): boolean {
    return this.loginService.isAuthenticated();
  }
}
