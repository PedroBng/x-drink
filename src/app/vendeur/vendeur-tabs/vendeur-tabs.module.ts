import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurTabsPageRoutingModule } from './vendeur-tabs-routing.module';

import { VendeurTabsPage } from './vendeur-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurTabsPageRoutingModule
  ],
  declarations: [VendeurTabsPage]
})
export class VendeurTabsPageModule {}
