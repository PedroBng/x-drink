import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeClientPage } from './type-client.page';

const routes: Routes = [
  {
    path: '',
    component: TypeClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeClientPageRoutingModule {}
