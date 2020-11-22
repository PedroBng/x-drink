import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurPanierPageRoutingModule } from './vendeur-panier-routing.module';

import { VendeurPanierPage } from './vendeur-panier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurPanierPageRoutingModule
  ],
  declarations: [VendeurPanierPage]
})
export class VendeurPanierPageModule {}
