import { Component } from '@angular/core';

@Component({
  selector: 'app-tokenasiaindex',
  templateUrl: './tokenasiaindex.component.html'
})

export class TokenasiaindexComponent {
showSelected : boolean;
constructor() {
    this.showSelected = false;   
  }
  ShowButton(){
        this.showSelected = true;
    }
    HideButton(){
        this.showSelected = false;
    }
}