import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoyenDePaiementChoixPageRoutingModule } from './moyen-de-paiement-choix-routing.module';

import { MoyenDePaiementChoixPage } from './moyen-de-paiement-choix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoyenDePaiementChoixPageRoutingModule
  ],
  declarations: [MoyenDePaiementChoixPage]
})
export class MoyenDePaiementChoixPageModule {}
