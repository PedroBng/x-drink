import { Component, OnInit } from '@angular/core';
interface Cart {
  id: number,
  img: string,
  name: string,
  qty:number,
  amount:number
}
@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})

export class PanierPage implements OnInit {

  cart:Cart[] =[]
  total=0
  inputQty=false

  constructor() { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.cart = JSON.parse(localStorage.getItem('cart')) || []
    console.log('this.cart :>> ', this.cart);
    this.cart.forEach(element => {
      if(!element.amount){
        element.amount=250
      }
      if(!element.qty){
        element.qty=1
      }
    });
    this.compute_total()
  }
  inputChange(event, item){
    console.log('event :>> ', event);
    item.qty = parseInt(event)
    this.compute_total()
  }
  increase(item:Cart){
    if (item.qty){
      item.qty = item.qty + 1
    }
    else{
      item.qty=2
    }
    this.compute_total()
  }
  decrease(item:Cart){
    if (!(item.qty -1 <= 0)){
      item.qty = item.qty-1
    }
    

    this.compute_total()
  }

  delete(item){
    this.cart.forEach((element,i) => {
      if(element.id == item.id){
        console.log('i :>> ', i);
        this.cart.splice(i,1)
        this.compute_total()
      }
    });
    
  }

  compute_total(){
    this.total = 0
    this.cart.forEach(element => {
      this.total = this.total + element.qty*element.amount
    });
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

}
