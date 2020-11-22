import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfeuilVendeurPage } from './portfeuil-vendeur.page';

const routes: Routes = [
  {
    path: '',
    component: PortfeuilVendeurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfeuilVendeurPageRoutingModule {}
