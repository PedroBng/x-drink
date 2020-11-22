import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortfeuilClientPageRoutingModule } from './portfeuil-client-routing.module';

import { PortfeuilClientPage } from './portfeuil-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortfeuilClientPageRoutingModule
  ],
  declarations: [PortfeuilClientPage]
})
export class PortfeuilClientPageModule {}
