import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurPanierPage } from './vendeur-panier.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurPanierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurPanierPageRoutingModule {}
