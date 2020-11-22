import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfeuilVendeurPageRoutingModule } from './portfeuil-vendeur-routing.module';

import { PortfeuilVendeurPage } from './portfeuil-vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfeuilVendeurPageRoutingModule
  ],
  declarations: [PortfeuilVendeurPage]
})
export class PortfeuilVendeurPageModule {}
