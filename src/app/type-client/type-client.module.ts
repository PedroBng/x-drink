import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeClientPageRoutingModule } from './type-client-routing.module';

import { TypeClientPage } from './type-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeClientPageRoutingModule
  ],
  declarations: [TypeClientPage]
})
export class TypeClientPageModule {}
