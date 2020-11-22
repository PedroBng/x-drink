import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfeuilClientPage } from './portfeuil-client.page';

const routes: Routes = [
  {
    path: '',
    component: PortfeuilClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfeuilClientPageRoutingModule {}
