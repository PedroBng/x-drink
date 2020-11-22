import { Injectable } from '@angular/core';






@Injectable({
  providedIn: 'root'
})

export class NavigationService {
  public appPages = [
    {
      title: 'Acceuil',
      url: '/app/tab1',
      tab: 'tab1',
      icon: 'share'
    },
    {
      title: 'Catalogue',
      url: '/app/tab2',
      tab: 'tab2',
      icon: 'search'
    },
    {
      title: 'Panier',
      url: '/app/tab3',
      tab: 'tab3',
      icon: 'chatbubbles'
    },
    {
      title: 'Inventaire',
      url: '/app/boxes',
      tab: 'boxes',
      icon: 'cube'
    }
];

  constructor() { }
}
