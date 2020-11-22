import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurPanierStockPage } from './vendeur-panier-stock.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurPanierStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurPanierStockPageRoutingModule {}
