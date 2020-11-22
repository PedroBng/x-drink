import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/authentification/authentification.service';

@Component({
  selector: 'app-depot-marchand',
  templateUrl: './depot-marchand.page.html',
  styleUrls: ['./depot-marchand.page.scss'],
})
export class DepotMarchandPage implements OnInit {
  dataDepot = {
    nom_depot: '',
    nom_gerant: '',
    email: '',
    telephone_gerant: '',
    ifu: '',
    adresse_livraison: '',
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
    if (this.dataDepot.password === this.dataDepot.password2) {
      const email = this.dataDepot.email;
      const password = this.dataDepot.password;
      this.authService.signUpUser(email, password).then(
        () => {
          localStorage.pseudo = this.dataDepot.nom_gerant;
          localStorage.email = this.dataDepot.email;
          localStorage.type = 'vendeur';
          this.firestore.collection('depot_marchand').add(this.dataDepot);
          this.firestore.collection('user').add(this.dataDepot);
          this.router.navigate(['vendeur-tabs']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

}
