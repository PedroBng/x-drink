import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeVentesPage } from './demande-ventes.page';

const routes: Routes = [
  {
    path: '',
    component: DemandeVentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DemandeVentesPageRoutingModule {}
