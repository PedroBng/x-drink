import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:
      [
        {
          path: 'accueil',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
              }
            ]
        },
        {
          path: 'catalogue',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../catalogue/catalogue.module').then( m => m.CataloguePageModule)
              }
            ]
        },
        {
          path: 'panier',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../panier/panier.module').then( m => m.PanierPageModule)
              }
            ]
        },
        {
          path: 'profil',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../profil/profil.module').then( m => m.ProfilPageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/tabs/accueil',
          pathMatch: 'full'
        }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
