import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdresseClientPage } from './adresse-client.page';

const routes: Routes = [
  {
    path: '',
    component: AdresseClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdresseClientPageRoutingModule {}
