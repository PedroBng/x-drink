import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreurProfilPage } from './livreur-profil.page';

const routes: Routes = [
  {
    path: '',
    component: LivreurProfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreurProfilPageRoutingModule {}
