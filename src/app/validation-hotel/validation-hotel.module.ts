import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationHotelPageRoutingModule } from './validation-hotel-routing.module';

import { ValidationHotelPage } from './validation-hotel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationHotelPageRoutingModule
  ],
  declarations: [ValidationHotelPage]
})
export class ValidationHotelPageModule {}
