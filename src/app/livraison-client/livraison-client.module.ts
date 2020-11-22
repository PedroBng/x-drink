import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivraisonClientPageRoutingModule } from './livraison-client-routing.module';

import { LivraisonClientPage } from './livraison-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivraisonClientPageRoutingModule
  ],
  declarations: [LivraisonClientPage]
})
export class LivraisonClientPageModule {}
