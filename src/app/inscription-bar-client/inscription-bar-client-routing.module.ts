import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionBarClientPage } from './inscription-bar-client.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionBarClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionBarClientPageRoutingModule {}
