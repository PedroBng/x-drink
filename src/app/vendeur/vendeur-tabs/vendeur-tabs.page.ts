import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendeur-tabs',
  templateUrl: './vendeur-tabs.page.html',
  styleUrls: ['./vendeur-tabs.page.scss'],
})
export class VendeurTabsPage implements OnInit {

  active_tab = "accueil"
  TABS = {
    ACCUEIL: "accueil",
    PANIER: "panier",
    CATALOGUE: "catalogue",
    PROFILE: "profil",
    STOCK: "stock"
  }
  
  constructor() { }

  ngOnInit() {
  }

  changed(event){
    this.active_tab = event.tab
    console.log('event :>> ', event);
  }
  isActive(tab){
    return tab == this.active_tab
  }

}
