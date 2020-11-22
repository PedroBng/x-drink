import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfeuil-client',
  templateUrl: './portfeuil-client.page.html',
  styleUrls: ['./portfeuil-client.page.scss'],
})
export class PortfeuilClientPage implements OnInit {

  login = {
    password:"",
    username:""
  }
  constructor() { }

  ngOnInit() {
  }

}
