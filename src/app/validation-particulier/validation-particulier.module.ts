import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationParticulierPageRoutingModule } from './validation-particulier-routing.module';

import { ValidationParticulierPage } from './validation-particulier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationParticulierPageRoutingModule
  ],
  declarations: [ValidationParticulierPage]
})
export class ValidationParticulierPageModule {}
