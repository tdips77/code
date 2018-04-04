import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styles: []
})
export class PipeComponent implements OnInit {
  emp: any[];
  constructor() { }

  ngOnInit() {
    this.emp = [
      { name: 'Shailendra', address: 'Noida', joining: new Date(), salary: 10000 },
      { name: 'Ankit', address: 'Delhi', joining: new Date(), salary: 12000 },
      { name: 'Mohan', address: 'Pune', joining: new Date(), salary: 13000 },
      { name: 'Lalit', address: 'Chennai', joining: new Date(), salary: 12000 }
    ];
  }

}
