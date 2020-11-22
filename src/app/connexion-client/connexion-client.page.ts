import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, RouterLink } from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'app-connexion-client',
  templateUrl: './connexion-client.page.html',
  styleUrls: ['./connexion-client.page.scss'],
})
export class ConnexionClientPage implements OnInit {

  login = {
    password: '',
    username: '',
    email: ''
  };


  type: any;
  errorMessage: any;

  constructor(public router: Router,
              private authService: AuthentificationService,
              public firestore: AngularFirestore) {
    this.type = localStorage.getItem('type');
    console.log(this.type);
  }

  ngOnInit() {
  }

  submit(){
    console.log('this.login :>> ', this.login);
    if (this.login.username === 'vendeur'){
      localStorage.setItem('user-type', 'vendeur');
      this.router.navigateByUrl('/vendeur-tabs');
      console.log('vendeur');
    }
    else if (this.login.username === 'client'){
      console.log('client');
      localStorage.setItem('user-type', 'client');
      this.router.navigateByUrl('tabs');
    }

  }

  soumettre() {
    const email = this.login.email;
    const password = this.login.password;
    this.authService.signInUser(email, password).then(
      () => {
        if (this.type === 'client') {
          this.router.navigate(['tabs']);
        }
        else if (this.type === 'vendeur') {
          this.router.navigate(['vendeur-tabs']);
        }
      }, (error) => {
        this.errorMessage = error;

      }
    );
  }

  soumettre2() {
    const email = this.login.email;
    const password = this.login.password;
    this.authService.signInUser(email, password).then(
      this.firestore.firestore.collection('user').where('email', '==', email).onSnapshot(
         (querySnapshot) => {
          // tslint:disable-next-line:prefer-const
          let etat: any;
          querySnapshot.forEach((doc) => {
              console.log(doc.data().type);
              etat = doc.data().type;
              console.log(etat);
            });
          console.log('utilisateur:' + etat);
          if (etat === 'client') {
            this.router.navigate(['tabs']);
          }else if (etat === 'vendeur') {
            this.router.navigate(['vendeur-tabs']);
          }

        })

    );
  }

}
