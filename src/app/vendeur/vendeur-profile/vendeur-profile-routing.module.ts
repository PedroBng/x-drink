import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurProfilePage } from './vendeur-profile.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurProfilePageRoutingModule {}
