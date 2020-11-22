import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCommandeClientPage } from './single-commande-client.page';

const routes: Routes = [
  {
    path: '',
    component: SingleCommandeClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleCommandeClientPageRoutingModule {}
