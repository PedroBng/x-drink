import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VendeurTabsPage } from './vendeur-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: VendeurTabsPage,
    children:
      [
        {
          path: 'accueil',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../vendeur-accueil/vendeur-accueil.module').then( m => m.VendeurAccueilPageModule)
              }
            ]
        },
        {
          path: 'catalogue',
          children:
            [
              {
                path: '',
                // loadChildren: () => import('../vendeur-catalogue/vendeur-catalogue.module').then( m => m.VendeurCataloguePageModule)
                loadChildren: () => import('../../catalogue/catalogue.module').then( m => m.CataloguePageModule)

              }
            ]
        },
        {
          path: 'panier',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../panier/panier.module').then( m => m.PanierPageModule)
              }
            ]
        },
        {
          path: 'stock',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../vendeur-stock/vendeur-stock.module').then( m => m.VendeurStockPageModule)
              }
            ]
        },
        {
          path: 'profil',
          children:
            [
              {
                path: '',
                loadChildren: () => import('../../profil/profil.module').then( m => m.ProfilPageModule)
              }
            ]
        },
        {
          path: '',
          redirectTo: '/vendeur-tabs/accueil',
          pathMatch: 'full'
        }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendeurTabsPageRoutingModule {}
