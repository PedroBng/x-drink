import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VendeurProfilePageRoutingModule } from './vendeur-profile-routing.module';

import { VendeurProfilePage } from './vendeur-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VendeurProfilePageRoutingModule
  ],
  declarations: [VendeurProfilePage]
})
export class VendeurProfilePageModule {}
