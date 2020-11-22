import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-hotel',
  templateUrl: './validation-hotel.page.html',
  styleUrls: ['./validation-hotel.page.scss'],
})
export class ValidationHotelPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  inputChange(event, n) {

    if(event==""){
      if(n-1!=0){
        (<HTMLInputElement>document.getElementById('ip'+(n-1)).children[0]).focus()
      }
    }
    else if(n+1!=6){
      (<HTMLInputElement>document.getElementById('ip'+(n+1)).children[0]).focus()
    }
    else{
      

      console.log("the code enter is ")
    }

    console.log(document.getElementById('ip2'))
  }

}
