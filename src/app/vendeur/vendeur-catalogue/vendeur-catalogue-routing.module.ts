import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurCataloguePage } from './vendeur-catalogue.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurCataloguePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurCataloguePageRoutingModule {}
