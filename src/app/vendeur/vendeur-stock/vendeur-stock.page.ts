import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendeur-stock',
  templateUrl: './vendeur-stock.page.html',
  styleUrls: ['./vendeur-stock.page.scss'],
})
export class VendeurStockPage implements OnInit {

  categories = ['Braserie', "PACK", "Autre", 'Braserie2', "PACK2", "Autre2"]
  selectedItem=[]
  option=''
  constructor() { }

  ngOnInit() {
  }

  isSelected(item){
    let find = false
    this.selectedItem.forEach(element => {
      if (element == item){
        find = true
      }
    });
    return find
  }
  select(item){
    if (this.option !==""){
      if (this.isSelected(item)){
        this.selectedItem.splice(this.selectedItem.indexOf(item),1)
      }
      else{
        this.selectedItem.push(item)
      }
    }

    localStorage.setItem('produit-stock', JSON.stringify(this.selectedItem))
  }

  validate(){

  }

  en_ligne(){
    console.log('en ligne');
    this.option = "en-ligne"
  }
  hors_ligne(){
    console.log('hord logne');
    this.option = "hors-ligne"
  }

}
