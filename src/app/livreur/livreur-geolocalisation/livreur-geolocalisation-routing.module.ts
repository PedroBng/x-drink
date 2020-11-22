import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreurGeolocalisationPage } from './livreur-geolocalisation.page';

const routes: Routes = [
  {
    path: '',
    component: LivreurGeolocalisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreurGeolocalisationPageRoutingModule {}
