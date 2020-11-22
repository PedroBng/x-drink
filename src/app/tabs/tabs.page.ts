import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  active_tab = "accueil"
  TABS = {
    ACCUEIL: "accueil",
    PANIER: "panier",
    CATALOGUE: "catalogue",
    PROFILE: "profil"
  }

  panier


  
  constructor() {

   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log('hello');
  }

  changed(event){
    this.active_tab = event.tab
    console.log('event :>> ', event);
  }
  isActive(tab){
    return tab == this.active_tab
  }

}
