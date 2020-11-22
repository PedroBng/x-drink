import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionBarClientPageRoutingModule } from './inscription-bar-client-routing.module';

import { InscriptionBarClientPage } from './inscription-bar-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionBarClientPageRoutingModule
  ],
  declarations: [InscriptionBarClientPage]
})
export class InscriptionBarClientPageModule {}
