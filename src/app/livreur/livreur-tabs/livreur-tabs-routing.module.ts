import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreurTabsPage } from './livreur-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: LivreurTabsPage,
    children:
      [
        {
          path: 'accueil',
          children:
          [
            {
              path: '',
              loadChildren: () => import('../livreur-acceuil/livreur-acceuil.module').then( m => m.LivreurAcceuilPageModule)
            }
          ]
        },
        {
          path: 'geolocalisation',
          children:
          [
            {
              path: '',
              loadChildren: () => import('../livreur-geolocalisation/livreur-geolocalisation.module').then( m => m.LivreurGeolocalisationPageModule)
            }
          ]
        },
        {
          path: 'profil',
          children:
          [
            {
              path: '',
              loadChildren: () => import('../livreur-profil/livreur-profil.module').then( m => m.LivreurProfilPageModule)
            }
          ]
        },
        {
          path: '',
          redirectTo: '/livreur-tabs/acceuil',
          pathMatch: 'full'
        }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreurTabsPageRoutingModule {}
