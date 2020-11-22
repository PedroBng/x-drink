import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DemandeVentesPageRoutingModule } from './demande-ventes-routing.module';

import { DemandeVentesPage } from './demande-ventes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DemandeVentesPageRoutingModule
  ],
  declarations: [DemandeVentesPage]
})
export class DemandeVentesPageModule {}
