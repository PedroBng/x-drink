import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleCommandeClientPageRoutingModule } from './single-commande-client-routing.module';

import { SingleCommandeClientPage } from './single-commande-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleCommandeClientPageRoutingModule
  ],
  declarations: [SingleCommandeClientPage]
})
export class SingleCommandeClientPageModule {}
