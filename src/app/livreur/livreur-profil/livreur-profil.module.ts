import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivreurProfilPageRoutingModule } from './livreur-profil-routing.module';

import { LivreurProfilPage } from './livreur-profil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivreurProfilPageRoutingModule
  ],
  declarations: [LivreurProfilPage]
})
export class LivreurProfilPageModule {}
