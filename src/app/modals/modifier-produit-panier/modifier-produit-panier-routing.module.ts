import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierProduitPanierPage } from './modifier-produit-panier.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierProduitPanierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierProduitPanierPageRoutingModule {}
