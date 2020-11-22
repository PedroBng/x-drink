import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AuthentificationService } from '../authentification/authentification.service';

@Component({
  selector: 'app-inscription-hotel-client',
  templateUrl: './inscription-hotel-client.page.html',
  styleUrls: ['./inscription-hotel-client.page.scss'],
})
export class InscriptionHotelClientPage implements OnInit {

  dataHotel = {
    nom_hotel: '',
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

  constructor(private authService: AuthentificationService,
              private router: Router,
              private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  soumettre() {
    if (this.dataHotel.password === this.dataHotel.password2) {
      const email = this.dataHotel.email;
      const password = this.dataHotel.password;
      this.authService.signUpUser(email, password).then(
        () => {
          localStorage.pseudo = this.dataHotel.nom_gerant;
          localStorage.email = this.dataHotel.email;
          localStorage.type = 'client';
          this.firestore.collection('hotel').add(this.dataHotel);
          this.firestore.collection('user').add(this.dataHotel);
          this.router.navigate(['tabs']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

}
