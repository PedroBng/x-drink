import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'app-inscription-particulier-client',
  templateUrl: './inscription-particulier-client.page.html',
  styleUrls: ['./inscription-particulier-client.page.scss'],
})
export class InscriptionParticulierClientPage implements OnInit {

  dataParticulier = {
    nom: '',
    prenoms: '',
    telephone: '',
    email: '',
    password: '',
    password2: '',
    type: 'client'
  };
  errorMessage: any;

  constructor(private router: Router,
              private authService: AuthentificationService,
              private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  soumettre() {
    if (this.dataParticulier.password === this.dataParticulier.password2) {
      const email = this.dataParticulier.email;
      const password = this.dataParticulier.password;
      this.authService.signUpUser(email, password).then(
        () => {
          localStorage.pseudo = this.dataParticulier.nom;
          localStorage.email = this.dataParticulier.email;
          localStorage.type = 'client';
          this.firestore.collection('particulier').add(this.dataParticulier);
          this.firestore.collection('user').add(this.dataParticulier);
          this.router.navigate(['tabs']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

}
