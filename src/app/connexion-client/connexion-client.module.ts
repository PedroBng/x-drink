import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionClientPageRoutingModule } from './connexion-client-routing.module';

import { ConnexionClientPage } from './connexion-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionClientPageRoutingModule
  ],
  declarations: [ConnexionClientPage]
})
export class ConnexionClientPageModule {}
