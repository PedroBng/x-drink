import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivraisonChoixPage } from './livraison-choix.page';

const routes: Routes = [
  {
    path: '',
    component: LivraisonChoixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivraisonChoixPageRoutingModule {}
