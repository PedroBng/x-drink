import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModifierProduitPanierPage } from 'src/app/modals/modifier-produit-panier/modifier-produit-panier.page';

@Component({
  selector: 'app-vendeur-panier-stock',
  templateUrl: './vendeur-panier-stock.page.html',
  styleUrls: ['./vendeur-panier-stock.page.scss'],
})
export class VendeurPanierStockPage implements OnInit {

  produit_panier=[]
  constructor(private modalController: ModalController) { }

  ngOnInit() {

    if(localStorage.getItem('produit-stock')){
      this.produit_panier = JSON.parse(localStorage.getItem('produit-stock'))
    }
  }

  openModal(item){
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModifierProduitPanierPage,
      cssClass: 'livraison-modal',
      componentProps: {
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(data);
  }

}
