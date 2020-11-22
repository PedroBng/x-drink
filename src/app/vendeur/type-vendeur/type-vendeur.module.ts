import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeVendeurPageRoutingModule } from './type-vendeur-routing.module';

import { TypeVendeurPage } from './type-vendeur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeVendeurPageRoutingModule
  ],
  declarations: [TypeVendeurPage]
})
export class TypeVendeurPageModule {}
