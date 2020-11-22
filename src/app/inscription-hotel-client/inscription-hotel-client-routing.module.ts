import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionHotelClientPage } from './inscription-hotel-client.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionHotelClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionHotelClientPageRoutingModule {}
