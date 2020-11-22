import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'launcher',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'launcher',
    loadChildren: () => import('./launcher/launcher.module').then( m => m.LauncherPageModule)
  },
  {
    path: 'tutoriel',
    loadChildren: () => import('./tutoriel/tutoriel.module').then( m => m.TutorielPageModule)
  },
  {
    path: 'historiques-client',
    loadChildren: () => import('./historiques-client/historiques-client.module').then( m => m.HistoriquesClientPageModule)
  },
  {
    path: 'adresse-client',
    loadChildren: () => import('./adresse-client/adresse-client.module').then( m => m.AdresseClientPageModule)
  },
  {
    path: 'single-commande-client',
    loadChildren: () => import('./single-commande-client/single-commande-client.module').then( m => m.SingleCommandeClientPageModule)
  },
  {
    path: 'portfeuil-client',
    loadChildren: () => import('./portfeuil-client/portfeuil-client.module').then( m => m.PortfeuilClientPageModule)
  },
  {
    path: 'notifications-client',
    loadChildren: () => import('./notifications-client/notifications-client.module').then( m => m.NotificationsClientPageModule)
  },
  {
    path: 'connexion-client',
    loadChildren: () => import('./connexion-client/connexion-client.module').then( m => m.ConnexionClientPageModule)
  },
  {
    path: 'inscription-bar-client',
    loadChildren: () => import('./inscription-bar-client/inscription-bar-client.module').then( m => m.InscriptionBarClientPageModule)
  },
  {
    path: 'inscription-hotel-client',
    loadChildren: () => import('./inscription-hotel-client/inscription-hotel-client.module').then( m => m.InscriptionHotelClientPageModule)
  },
  {
    path: 'inscription-particulier-client',
    loadChildren: () => import('./inscription-particulier-client/inscription-particulier-client.module').then( m => m.InscriptionParticulierClientPageModule)
  },
  {
    path: 'validation-bar',
    loadChildren: () => import('./validation-bar/validation-bar.module').then( m => m.ValidationBarPageModule)
  },
  {
    path: 'validation-hotel',
    loadChildren: () => import('./validation-hotel/validation-hotel.module').then( m => m.ValidationHotelPageModule)
  },
  {
    path: 'validation-particulier',
    loadChildren: () => import('./validation-particulier/validation-particulier.module').then( m => m.ValidationParticulierPageModule)
  },
  {
    path: 'type-client',
    loadChildren: () => import('./type-client/type-client.module').then( m => m.TypeClientPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)
  },
  {
    path: 'load',
    loadChildren: () => import('./load/load.module').then( m => m.LoadPageModule)
  },
  {
    path: 'type-vendeur',
    loadChildren: () => import('./vendeur/type-vendeur/type-vendeur.module').then( m => m.TypeVendeurPageModule)
  },
  {
    path: 'depot-marchand',
    loadChildren: () => import('./vendeur/depot-marchand/depot-marchand.module').then( m => m.DepotMarchandPageModule)
  },
  {
    path: 'distributeur-agree',
    loadChildren: () => import('./vendeur/distributeur-agree/distributeur-agree.module').then( m => m.DistributeurAgreePageModule)
  },
  {
    path: 'portfeuil-vendeur',
    loadChildren: () => import('./vendeur/portfeuil-vendeur/portfeuil-vendeur.module').then( m => m.PortfeuilVendeurPageModule)
  },
  {
    path: 'demande-ventes',
    loadChildren: () => import('./vendeur/demande-ventes/demande-ventes.module').then( m => m.DemandeVentesPageModule)
  },
    {

        path: 'statistics',
        loadChildren: () => import('./vendeur/statistics/statistics.module').then(m => m.StatisticsPageModule)
    },
    {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'vendeur-tabs',
    loadChildren: () => import('./vendeur/vendeur-tabs/vendeur-tabs.module').then( m => m.VendeurTabsPageModule)
  },
  {
    path: 'vendeur-accueil',
    loadChildren: () => import('./vendeur/vendeur-accueil/vendeur-accueil.module').then( m => m.VendeurAccueilPageModule)
  },
  {
    path: 'vendeur-profile',
    loadChildren: () => import('./vendeur/vendeur-profile/vendeur-profile.module').then( m => m.VendeurProfilePageModule)
  },
  {
    path: 'vendeur-stock',
    loadChildren: () => import('./vendeur/vendeur-stock/vendeur-stock.module').then( m => m.VendeurStockPageModule)
  },
  {
    path: 'vendeur-panier',
    loadChildren: () => import('./vendeur/vendeur-panier/vendeur-panier.module').then( m => m.VendeurPanierPageModule)
  },
  {
    path: 'vendeur-catalogue',
    loadChildren: () => import('./vendeur/vendeur-catalogue/vendeur-catalogue.module').then( m => m.VendeurCataloguePageModule)
  },
  {
    path: 'add-stock',
    loadChildren: () => import('./vendeur/modal/add-stock/add-stock.module').then( m => m.AddStockPageModule)
  },
  {
    path: 'vendeur-panier-stock',
    loadChildren: () => import('./vendeur/vendeur-panier-stock/vendeur-panier-stock.module').then( m => m.VendeurPanierStockPageModule)
  },
  {
    path: 'bravo',
    loadChildren: () => import('./vendeur/bravo/bravo.module').then( m => m.BravoPageModule)
  },
  {
    path: 'livraison-client',
    loadChildren: () => import('./livraison-client/livraison-client.module').then( m => m.LivraisonClientPageModule)

  },
  {
    path: 'livraison-choix',
    loadChildren: () => import('./modals/livraison-choix/livraison-choix.module').then( m => m.LivraisonChoixPageModule)
  },
  {
    path: 'moyen-de-paiement-choix',
    loadChildren: () => import('./modals/moyen-de-paiement-choix/moyen-de-paiement-choix.module').then( m => m.MoyenDePaiementChoixPageModule)
  },
  {
    path: 'historique-detail',
    loadChildren: () => import('./historique-detail/historique-detail.module').then( m => m.HistoriqueDetailPageModule)
  },
  {
    path: 'qrcode',
    loadChildren: () => import('./qrcode/qrcode.module').then( m => m.QrcodePageModule)
  },
  {
    path: 'modifier-produit-panier',
    loadChildren: () => import('./modals/modifier-produit-panier/modifier-produit-panier.module').then( m => m.ModifierProduitPanierPageModule)
  },
  {
    path: 'code-de-vente',
    loadChildren: () => import('./vendeur/code-de-vente/code-de-vente.module').then( m => m.CodeDeVentePageModule)
  },  {
    path: 'type-inscription',
    loadChildren: () => import('./type-inscription/type-inscription.module').then( m => m.TypeInscriptionPageModule)
  },
  {
    path: 'portfeuil-livreur',
    loadChildren: () => import('./livreur/portfeuil-livreur/portfeuil-livreur.module').then( m => m.PortfeuilLivreurPageModule)
  },
  {
    path: 'inscription-livreur',
    loadChildren: () => import('./livreur/inscription-livreur/inscription-livreur.module').then( m => m.InscriptionLivreurPageModule)
  },
  {
    path: 'livreur-tabs',
    loadChildren: () => import('./livreur/livreur-tabs/livreur-tabs.module').then( m => m.LivreurTabsPageModule)
  },
  {
    path: 'livreur-acceuil',
    loadChildren: () => import('./livreur/livreur-acceuil/livreur-acceuil.module').then( m => m.LivreurAcceuilPageModule)
  },
  {
    path: 'livreur-geolocalisation',
    loadChildren: () => import('./livreur/livreur-geolocalisation/livreur-geolocalisation.module').then( m => m.LivreurGeolocalisationPageModule)
  },
  {
    path: 'livreur-profil',
    loadChildren: () => import('./livreur/livreur-profil/livreur-profil.module').then( m => m.LivreurProfilPageModule)
  },

  // {
  //   path: 'app',
  //   loadChildren: './pages/tabs/tabs.module#TabsPageModule'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
