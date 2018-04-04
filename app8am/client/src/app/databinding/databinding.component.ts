import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: []
})
export class DatabindingComponent implements OnInit {
  company: string;
  name: string;
  constructor() {
    this.company = 'Dot Net Tricks';
    this.name = 'Shailendra';
  }

  ngOnInit() {
  }
  Greet() {
    alert(`Hi, ${this.name} !`);
  }
}
