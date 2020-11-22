import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {

  cat
  categories= [
    {
      id:1,
      name:"Liqueur",
      img:"/assets/illustration/liqueurs1.png",
      qty:0,
      amount:500
    },
    {
      id:2,
      name:"Jus de fruit",
      img:"/assets/illustration/jus-de-fruits3.png",
      qty:0,
      amount:250
    },
    {
      id:3,
      name:"Canettes",
      img:"/assets/illustration/cannettes1.png",
      qty:0,
      amount:250
    },
    {
      id:4,
      name:"Sobebra",
      img:"/assets/illustration/brasserie3.png",
      qty:0,
      amount:250
    }
  ]
  selectedCat={
    id:1,
    name:"Liqueur",
    img:"/assets/illustration/liqueurs1.png",
    qty:0,
    amount:250
  }

  produits=[
    {
      id:0,
      img:"https://picsum.photos/200",
      name:"Nom du produit",
      qty:0,
      amount:250
    }
  ]

  carts=[]

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
              private toastController: ToastController) { }

  ngOnInit() {
    [1,2,3,4,5,6,7,8,9].forEach(element => {
      this.produits.push(
        {
          id:element,
          img: "https://picsum.photos/200",
          name:"Nom du produit "+ element,
          qty:0,
          amount:250
        }
      )
    });
  }
  ionViewWillEnter(){
    // this.activatedRoute.queryParams.subscribe(params => {
    //   this.cat = this.router.getCurrentNavigation().extras.state.cat;
    //   console.log('this.cat :>> ', this.cat);
    // });
    this.cat = JSON.parse(localStorage.getItem('categorie'))
    if (this.cat){
      console.log('hello');
      this.selectedCat=this.cat
    }
    console.log('this.cat :>> ', this.cat);
  }

  add(item){
    let exist = false

    this.carts.forEach(element => {
      if (element.id == item.id){
        exist = true
        console.log('eist');
      }

    });
    console.log(exist);
    if (exist === false){
      this.carts.push(item);
      this.presentToast();
    }
    else{
      this.presentToast('Produit déja dans le panier')
    }
    localStorage.setItem("cart",JSON.stringify(this.carts))
  }

  async presentToast(message = "Ajouté au panier") {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}
