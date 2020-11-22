import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopovercomponentPage } from '../popovercomponent/popovercomponent.page';


@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {


  constructor(private popover: PopoverController,
              private router: Router ) { }

  ngOnInit() {
  }

  async presentPopover(ev: any) {
   /* const popover = await this.popover.create({
      component: PopovercomponentPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();*/
    this.router.navigate(['connexion-client']);
  }



}
