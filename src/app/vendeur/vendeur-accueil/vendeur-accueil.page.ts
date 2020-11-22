import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendeur-accueil',
  templateUrl: './vendeur-accueil.page.html',
  styleUrls: ['./vendeur-accueil.page.scss'],
})
export class VendeurAccueilPage implements OnInit {

  commandes = []
  constructor() { }

  ngOnInit() {
  }

}
