import { Result } from './../models/User';
import { LoginService } from './../services/login-service.service';
import { UsersService } from '../services/users-service.service';
import { User } from '../models/User';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {


  public userList: Result[];
  public showDetails: number;

  // tslint:disable-next-line: max-line-length
  constructor(private obtenerUsuarios: UsersService, private loginService: LoginService, public loadingController: LoadingController) {
    this.userList = [];
  }

  ngOnInit() {

    this.loadingController.create({
      message: 'Por favor espere un momento...',
     }).then(res => {
      res.present();
     });

    this.obtenerUsuarios.obteneListaUsuarios().subscribe(res => {
      this.userList = res.results;
      this.loadingController.dismiss();
    });
  }

  LogOut() {
    this.loginService.LogOut();
  }

  ShowDetails(i) {
    this.showDetails = i;
  }

  HideDetails() {
    this.showDetails = null;
  }



  }
