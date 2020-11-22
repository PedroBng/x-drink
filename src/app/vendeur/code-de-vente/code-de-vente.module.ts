import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodeDeVentePageRoutingModule } from './code-de-vente-routing.module';

import { CodeDeVentePage } from './code-de-vente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodeDeVentePageRoutingModule
  ],
  declarations: [CodeDeVentePage]
})
export class CodeDeVentePageModule {}
