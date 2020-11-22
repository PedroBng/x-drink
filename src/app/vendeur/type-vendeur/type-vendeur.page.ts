import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-vendeur',
  templateUrl: './type-vendeur.page.html',
  styleUrls: ['./type-vendeur.page.scss'],
})
export class TypeVendeurPage implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("user-type","vendeur")

  }

}
