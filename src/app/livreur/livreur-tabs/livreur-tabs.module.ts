import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivreurTabsPageRoutingModule } from './livreur-tabs-routing.module';

import { LivreurTabsPage } from './livreur-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivreurTabsPageRoutingModule
  ],
  declarations: [LivreurTabsPage]
})
export class LivreurTabsPageModule {}
