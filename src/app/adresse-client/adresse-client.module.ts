import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdresseClientPageRoutingModule } from './adresse-client-routing.module';

import { AdresseClientPage } from './adresse-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdresseClientPageRoutingModule
  ],
  declarations: [AdresseClientPage]
})
export class AdresseClientPageModule {}
