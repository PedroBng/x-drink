import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-client',
  templateUrl: './type-client.page.html',
  styleUrls: ['./type-client.page.scss'],
})
export class TypeClientPage implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem("user-type","client")
  }

}
