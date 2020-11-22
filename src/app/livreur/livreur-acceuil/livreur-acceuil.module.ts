import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivreurAcceuilPageRoutingModule } from './livreur-acceuil-routing.module';

import { LivreurAcceuilPage } from './livreur-acceuil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivreurAcceuilPageRoutingModule
  ],
  declarations: [LivreurAcceuilPage]
})
export class LivreurAcceuilPageModule {}
