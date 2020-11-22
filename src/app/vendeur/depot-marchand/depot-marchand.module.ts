import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepotMarchandPageRoutingModule } from './depot-marchand-routing.module';

import { DepotMarchandPage } from './depot-marchand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepotMarchandPageRoutingModule
  ],
  declarations: [DepotMarchandPage]
})
export class DepotMarchandPageModule {}
