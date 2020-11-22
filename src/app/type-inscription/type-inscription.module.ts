import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeInscriptionPageRoutingModule } from './type-inscription-routing.module';

import { TypeInscriptionPage } from './type-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeInscriptionPageRoutingModule
  ],
  declarations: [TypeInscriptionPage]
})
export class TypeInscriptionPageModule {}
