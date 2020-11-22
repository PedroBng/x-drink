import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionHotelClientPageRoutingModule } from './inscription-hotel-client-routing.module';

import { InscriptionHotelClientPage } from './inscription-hotel-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionHotelClientPageRoutingModule
  ],
  declarations: [InscriptionHotelClientPage]
})
export class InscriptionHotelClientPageModule {}
