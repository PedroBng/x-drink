import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistributeurAgreePage } from './distributeur-agree.page';

const routes: Routes = [
  {
    path: '',
    component: DistributeurAgreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistributeurAgreePageRoutingModule {}
