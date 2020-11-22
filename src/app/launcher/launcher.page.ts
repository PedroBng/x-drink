import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.page.html',
  styleUrls: ['./launcher.page.scss'],
})
export class LauncherPage implements OnInit {

  constructor(
    public router: Router,) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/tutoriel');
    },4000);
  }

}
