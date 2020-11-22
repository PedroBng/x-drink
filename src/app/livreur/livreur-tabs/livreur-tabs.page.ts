import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livreur-tabs',
  templateUrl: './livreur-tabs.page.html',
  styleUrls: ['./livreur-tabs.page.scss'],
})
export class LivreurTabsPage implements OnInit {

  ACTIVE_TAB = 'accueil';
  TABS = {
    ACCUEIL: 'accueil',
    GEOLOCALISATION: 'geolocalisation',
    PROFIL: 'profil',
  };

  constructor() { }

  ngOnInit() {
  }

  changed(event){
    this.ACTIVE_TAB = event.tab,
    console.log('event :>> ', event);
  }
  isActive(tab){
    return tab === this.ACTIVE_TAB;
  }

}
