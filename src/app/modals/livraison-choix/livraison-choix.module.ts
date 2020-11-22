import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivraisonChoixPageRoutingModule } from './livraison-choix-routing.module';

import { LivraisonChoixPage } from './livraison-choix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivraisonChoixPageRoutingModule
  ],
  declarations: [LivraisonChoixPage]
})
export class LivraisonChoixPageModule {}
