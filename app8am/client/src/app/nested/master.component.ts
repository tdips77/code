import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styles: []
})
export class MasterComponent implements OnInit {
  company: string;
  constructor() {
    this.company = 'Dot Net Tricks';
  }

  ngOnInit() {
  }
  Greet(msg: string) {
    alert(msg);
  }
}
