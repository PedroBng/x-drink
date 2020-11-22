import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modifier-produit-panier',
  templateUrl: './modifier-produit-panier.page.html',
  styleUrls: ['./modifier-produit-panier.page.scss'],
})
export class ModifierProduitPanierPage implements OnInit {

  nom_produit='Fanta citron'
  unite="casier"
  prix_unitaire=1000
  qty=5
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  valider(moyen_de_paiement){
    console.log("valider libraison");
    this.dissmiss()
  }
  dissmiss(){
    this.modalCtrl.dismiss({
      'data': {
        nom_produit:this.nom_produit,
        unite:this.unite,
        prix_unitaire:this.prix_unitaire,
        qty:this.qty
      }
    });
  }

}
