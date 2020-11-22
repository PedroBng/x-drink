import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurCataloguePageRoutingModule } from './vendeur-catalogue-routing.module';

import { VendeurCataloguePage } from './vendeur-catalogue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurCataloguePageRoutingModule
  ],
  declarations: [VendeurCataloguePage]
})
export class VendeurCataloguePageModule {}
