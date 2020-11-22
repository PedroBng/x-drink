import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthentificationService } from './authentification/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  userType = '';
  pseudo: string;
  email: string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthentificationService
  ) {
    this.initializeApp();
    this.pseudo = localStorage.getItem('pseudo');
    this.email = localStorage.getItem('email');
    this.userType = localStorage.getItem('user-type');

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  deconnexion() {
    this.authService.signOut();
    this.router.navigate(['connexion-client']);
  }
}
