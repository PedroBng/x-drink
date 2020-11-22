import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoyenDePaiementChoixPage } from './moyen-de-paiement-choix.page';

const routes: Routes = [
  {
    path: '',
    component: MoyenDePaiementChoixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoyenDePaiementChoixPageRoutingModule {}
