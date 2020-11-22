import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-particulier',
  templateUrl: './validation-particulier.page.html',
  styleUrls: ['./validation-particulier.page.scss'],
})
export class ValidationParticulierPage implements OnInit {

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
