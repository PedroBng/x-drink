import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationBarPage } from './validation-bar.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationBarPageRoutingModule {}
