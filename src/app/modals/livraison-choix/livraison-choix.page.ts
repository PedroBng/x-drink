import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-livraison-choix',
  templateUrl: './livraison-choix.page.html',
  styleUrls: ['./livraison-choix.page.scss'],
})
export class LivraisonChoixPage implements OnInit {

  livraison={
    localisation:"",
    detail:""
  }
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  valider(){
    console.log("valider libraison");
    this.dismiss()
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'livraison': this.livraison
    });
  }

}
