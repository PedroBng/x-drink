import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurStockPageRoutingModule } from './vendeur-stock-routing.module';

import { VendeurStockPage } from './vendeur-stock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurStockPageRoutingModule
  ],
  declarations: [VendeurStockPage]
})
export class VendeurStockPageModule {}
