import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfeuilLivreurPage } from './portfeuil-livreur.page';

const routes: Routes = [
  {
    path: '',
    component: PortfeuilLivreurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfeuilLivreurPageRoutingModule {}
