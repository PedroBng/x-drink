import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivraisonClientPage } from './livraison-client.page';

const routes: Routes = [
  {
    path: '',
    component: LivraisonClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivraisonClientPageRoutingModule {}
