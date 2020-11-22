import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfeuilLivreurPageRoutingModule } from './portfeuil-livreur-routing.module';

import { PortfeuilLivreurPage } from './portfeuil-livreur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfeuilLivreurPageRoutingModule
  ],
  declarations: [PortfeuilLivreurPage]
})
export class PortfeuilLivreurPageModule {}
