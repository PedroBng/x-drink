import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  sliderOpts = {
    zoom: false,
    slidesPerView: 3.5,
    spaceBetween: 1,
  };

  categories= [
    {
      id:1,
      name:"Liqueur",
      img:"/assets/illustration/liqueurs1.png"
    },
    {
      id:2,
      name:"Jus de fruit",
      img:"/assets/illustration/jus-de-fruits3.png"
    },
    {
      id:3,
      name:"Canettes",
      img:"/assets/illustration/cannettes1.png"
    },
    {
      id:4,
      name:"Sobebra",
      img:"/assets/illustration/brasserie3.png"
    }
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoCat(cat){
    let navigationExtras: NavigationExtras = {
      state: {
        cat: cat
      }
    }
    localStorage.setItem('categorie', JSON
    .stringify(cat))
    this.router.navigateByUrl('/tabs/catalogue', navigationExtras)
  }

}
