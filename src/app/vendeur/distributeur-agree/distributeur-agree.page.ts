import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/authentification/authentification.service';

@Component({
  selector: 'app-distributeur-agree',
  templateUrl: './distributeur-agree.page.html',
  styleUrls: ['./distributeur-agree.page.scss'],
})
export class DistributeurAgreePage implements OnInit {
  dataDistributeur = {
    distributeur_agree: '',
    email: '',
    password: '',
    password2: '',
    type: 'vendeur'
  };
  errorMessage: any;

  constructor(private router: Router,
              private authService: AuthentificationService,
              private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  soumettre() {
    if (this.dataDistributeur.password === this.dataDistributeur.password2) {
      const email = this.dataDistributeur.email;
      const password = this.dataDistributeur.password;
      this.authService.signUpUser(email, password).then(
        () => {
          localStorage.pseudo = this.dataDistributeur.distributeur_agree;
          localStorage.email = this.dataDistributeur.email;
          localStorage.type = 'vendeur';
          this.firestore.collection('distributeur_agree').add(this.dataDistributeur);
          this.firestore.collection('user').add(this.dataDistributeur);
          this.router.navigate(['vendeur-tabs']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

}
