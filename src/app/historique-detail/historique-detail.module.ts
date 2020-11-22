import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoriqueDetailPageRoutingModule } from './historique-detail-routing.module';

import { HistoriqueDetailPage } from './historique-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoriqueDetailPageRoutingModule
  ],
  declarations: [HistoriqueDetailPage]
})
export class HistoriqueDetailPageModule {}
