import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  @Input() mycompany;
  @Output() greet: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendMessage() {
    this.greet.emit('Hi, from details!');
  }
}
