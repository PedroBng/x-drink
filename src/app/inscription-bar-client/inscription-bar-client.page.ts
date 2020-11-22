import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'app-inscription-bar-client',
  templateUrl: './inscription-bar-client.page.html',
  styleUrls: ['./inscription-bar-client.page.scss'],
})
export class InscriptionBarClientPage implements OnInit {
  dataBar = {
    nom_depot: '',
    nom_gerant: '',
    telephone_gerant: '',
    email: '',
    ifu: '',
    adresse_livraison: '',
    password: '',
    password2: '',
    type: 'client'
  };
  errorMessage: any;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthentificationService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  soumettre() {
    if (this.dataBar.password === this.dataBar.password2){
      const email = this.dataBar.email;
      const password = this.dataBar.password;
      this.authService.signUpUser(email, password).then(
        () => {
          localStorage.pseudo = this.dataBar.nom_gerant;
          localStorage.email = this.dataBar.email;
          localStorage.type = 'client';
          this.firestore.collection('bar-buvette').add(this.dataBar);
          this.firestore.collection('user').add(this.dataBar);
          this.router.navigate(['tabs']);
        },
        (error) => {
         this.errorMessage = error;
        }
      );
    }
  }



}
