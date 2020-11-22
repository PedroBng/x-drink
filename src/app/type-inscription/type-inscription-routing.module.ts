import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeInscriptionPage } from './type-inscription.page';

const routes: Routes = [
  {
    path: '',
    component: TypeInscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeInscriptionPageRoutingModule {}
