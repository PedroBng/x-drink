import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoriqueDetailPage } from './historique-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HistoriqueDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoriqueDetailPageRoutingModule {}
