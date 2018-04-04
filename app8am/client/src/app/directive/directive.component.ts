import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styles: []
})
export class DirectiveComponent implements OnInit {
  num: number;
  forecolor: string;
  alphabet: string;
  colors: string[];
  constructor() {
    this.forecolor = 'white';
    this.num = 1;
    this.colors = ['red', 'blue', 'green'];
  }

  ngOnInit() {
  }

}
