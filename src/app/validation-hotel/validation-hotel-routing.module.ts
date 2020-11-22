import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationHotelPage } from './validation-hotel.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationHotelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationHotelPageRoutingModule {}
