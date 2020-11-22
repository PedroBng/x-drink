import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LivreurGeolocalisationPageRoutingModule } from './livreur-geolocalisation-routing.module';

import { LivreurGeolocalisationPage } from './livreur-geolocalisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivreurGeolocalisationPageRoutingModule
  ],
  declarations: [LivreurGeolocalisationPage]
})
export class LivreurGeolocalisationPageModule {}
