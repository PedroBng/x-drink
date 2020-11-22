import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierProduitPanierPageRoutingModule } from './modifier-produit-panier-routing.module';

import { ModifierProduitPanierPage } from './modifier-produit-panier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierProduitPanierPageRoutingModule
  ],
  declarations: [ModifierProduitPanierPage]
})
export class ModifierProduitPanierPageModule {}
