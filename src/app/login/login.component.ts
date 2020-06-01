import { LoginService } from '../services/login-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: FormControl;
  public password: FormControl;
  public loginForm: FormGroup;
  public validBtn: boolean ;

  // tslint:disable-next-line: max-line-length
  constructor(private loginService: LoginService, private router: Router) {
    this.email = new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.com')]);
    this.password = new FormControl('', [Validators.required]);
  }

  ngOnInit() {

    if (localStorage.getItem('sid') != null) {
      this.router.navigate(['users']);
    }

    this.validBtn = false;
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });

    // se inicia la subscripcion al formulario de login, detectando los cambios de este y asi habilitar el boton ingresar //
    this.loginForm.valueChanges.subscribe(value => {
      if (this.loginForm.valid) {
        this.validBtn = true;
      } else {
        this.validBtn = false;
      }
    });
  }

  LogIn() {
    if (this.loginForm.valid) {
      this.loginService.LogIn(this.email.value, this.password.value);
    }
  }



}
