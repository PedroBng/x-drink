import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-bar',
  templateUrl: './validation-bar.page.html',
  styleUrls: ['./validation-bar.page.scss'],
})
export class ValidationBarPage implements OnInit {

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
