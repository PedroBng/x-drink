import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionLivreurPage } from './inscription-livreur.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionLivreurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionLivreurPageRoutingModule {}
