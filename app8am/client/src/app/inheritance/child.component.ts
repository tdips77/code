import { Component, OnInit } from '@angular/core';
import { ParentComponent } from './parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent extends ParentComponent implements OnInit {
  ngOnInit() {
    this.http.get('http://www.dotnettricks.com').subscribe((res) => {
      const data = res;
      console.log(data);
    });
  }
}
