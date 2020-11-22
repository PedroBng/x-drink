import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionParticulierClientPageRoutingModule } from './inscription-particulier-client-routing.module';

import { InscriptionParticulierClientPage } from './inscription-particulier-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionParticulierClientPageRoutingModule
  ],
  declarations: [InscriptionParticulierClientPage]
})
export class InscriptionParticulierClientPageModule {}
