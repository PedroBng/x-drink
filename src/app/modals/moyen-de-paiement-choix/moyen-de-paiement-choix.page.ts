import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-moyen-de-paiement-choix',
  templateUrl: './moyen-de-paiement-choix.page.html',
  styleUrls: ['./moyen-de-paiement-choix.page.scss'],
})
export class MoyenDePaiementChoixPage implements OnInit {

  moyen_de_paiement=""
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  valider(moyen_de_paiement){
    console.log("valider libraison");
    this.modalCtrl.dismiss({
      'moyen_de_paiement': moyen_de_paiement
    });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
