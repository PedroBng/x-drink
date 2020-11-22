import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionClientPage } from './connexion-client.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionClientPageRoutingModule {}
