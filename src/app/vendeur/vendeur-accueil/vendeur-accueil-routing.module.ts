import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurAccueilPage } from './vendeur-accueil.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurAccueilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurAccueilPageRoutingModule {}
