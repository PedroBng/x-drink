import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriquesClientPage } from './historiques-client.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriquesClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriquesClientPageRoutingModule {}
