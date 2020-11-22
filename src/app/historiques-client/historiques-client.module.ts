import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriquesClientPageRoutingModule } from './historiques-client-routing.module';

import { HistoriquesClientPage } from './historiques-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriquesClientPageRoutingModule
  ],
  declarations: [HistoriquesClientPage]
})
export class HistoriquesClientPageModule {}
