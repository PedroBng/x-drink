import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistributeurAgreePageRoutingModule } from './distributeur-agree-routing.module';

import { DistributeurAgreePage } from './distributeur-agree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistributeurAgreePageRoutingModule
  ],
  declarations: [DistributeurAgreePage]
})
export class DistributeurAgreePageModule {}
