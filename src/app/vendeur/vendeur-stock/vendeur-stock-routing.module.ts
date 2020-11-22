import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurStockPage } from './vendeur-stock.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurStockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurStockPageRoutingModule {}
