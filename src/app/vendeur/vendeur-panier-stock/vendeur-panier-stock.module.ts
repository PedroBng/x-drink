import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurPanierStockPageRoutingModule } from './vendeur-panier-stock-routing.module';

import { VendeurPanierStockPage } from './vendeur-panier-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurPanierStockPageRoutingModule
  ],
  declarations: [VendeurPanierStockPage]
})
export class VendeurPanierStockPageModule {}
