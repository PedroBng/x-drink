import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionParticulierClientPage } from './inscription-particulier-client.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionParticulierClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionParticulierClientPageRoutingModule {}
