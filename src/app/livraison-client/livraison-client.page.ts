import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { LivraisonChoixPage } from '../modals/livraison-choix/livraison-choix.page';
import { MoyenDePaiementChoixPage } from '../modals/moyen-de-paiement-choix/moyen-de-paiement-choix.page';

@Component({
  selector: 'app-livraison-client',
  templateUrl: './livraison-client.page.html',
  styleUrls: ['./livraison-client.page.scss'],
})
export class LivraisonClientPage implements OnInit {

  moyen_de_paiement
  livraisonAddress={
    localisation:"",
    detail:""
  }
  cart
  total=0
  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log('this.cart :>> ', this.cart);
    this.cart.forEach(element => {
      if(!element.amount){
        element.amount=250
      }
      if(!element.qty){
        element.qty=1
      }
    });
    this.total = 0
    this.cart.forEach(element => {
      this.total = this.total + element.qty*element.amount
    });
  }
  livraison(){
    console.log('livraison');
    this.presentModal()
  }
  paiement(){
    console.log("paiement");
    this.presentModalPaiement()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LivraisonChoixPage,
      cssClass: 'livraison-modal',
      componentProps: {
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.livraisonAddress = data.livraison
    console.log(data);
  }
  async presentModalPaiement() {
    const modal = await this.modalController.create({
      component: MoyenDePaiementChoixPage,
      cssClass: 'livraison-modal',
      componentProps: {
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.moyen_de_paiement = data.moyen_de_paiement
    console.log(data);
  }

  commander(){
    this.presentAlert()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Commande effectuée',
      message: 'Votre commande a été enregistré.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
