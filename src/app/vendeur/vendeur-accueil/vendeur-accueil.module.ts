import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurAccueilPageRoutingModule } from './vendeur-accueil-routing.module';

import { VendeurAccueilPage } from './vendeur-accueil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurAccueilPageRoutingModule
  ],
  declarations: [VendeurAccueilPage]
})
export class VendeurAccueilPageModule {}
