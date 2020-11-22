import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  userType = '';
  pseudo: string;
  email: string;
  constructor() {

    this.pseudo = localStorage.getItem('pseudo');
    this.email = localStorage.getItem('email');
    this.userType = localStorage.getItem('user-type');

   }

  ngOnInit() {
  }

}
