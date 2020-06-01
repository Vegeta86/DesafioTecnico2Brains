
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // tslint:disable-next-line: max-line-length
  constructor(private afAuth: AngularFireAuth, private router: Router, public toastController: ToastController, public loadingController: LoadingController) {
  }

  LogIn(email, password) {

    return this.afAuth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('sid', res.user.uid);
      this.loadingController.dismiss(); // elimina la animacion de espera
      this.router.navigate(['users']); // si el login es exitoso redirige a la pagina usuarios
    }).catch((error) => {

      // creacion y configuracion del toast controller cuando el usuario o pass son invalidas //
      this.toastController.create({
        message: 'Usario y/o Contraseña invalida',
        duration: 3000,
        position: 'top',
        color: 'danger'
      }).then(res => {
        res.present();
      });
    });
  }

  // al hacer logout se elimina el localstorage y vuelve a la pagina de login //
  LogOut() {
    localStorage.clear();
    this.router.navigate(['login']);
  }


  isAuthenticated(): boolean {
    if (localStorage.getItem('sid') != null) {
      return true;
    } else {
      return false;
    }
  }
}
