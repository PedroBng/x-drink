import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionLivreurPageRoutingModule } from './inscription-livreur-routing.module';

import { InscriptionLivreurPage } from './inscription-livreur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionLivreurPageRoutingModule
  ],
  declarations: [InscriptionLivreurPage]
})
export class InscriptionLivreurPageModule {}
