import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeDeVentePage } from './code-de-vente.page';

const routes: Routes = [
  {
    path: '',
    component: CodeDeVentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeDeVentePageRoutingModule {}
