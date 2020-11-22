import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationBarPageRoutingModule } from './validation-bar-routing.module';

import { ValidationBarPage } from './validation-bar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationBarPageRoutingModule
  ],
  declarations: [ValidationBarPage]
})
export class ValidationBarPageModule {}
