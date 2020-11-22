import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreurAcceuilPage } from './livreur-acceuil.page';

const routes: Routes = [
  {
    path: '',
    component: LivreurAcceuilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreurAcceuilPageRoutingModule {}
