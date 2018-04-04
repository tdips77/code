import { Component, OnInit, Input, OnChanges, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-childhooks',
  templateUrl: './childhooks.component.html',
  styles: []
})
export class ChildhooksComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() company;
  constructor() {
    console.log('Child : constructor');
  }

  ngOnInit() {
    console.log('Child : ngOnInit');
  }
  ngOnChanges() {
    console.log('Child : ngOnChanges');
  }
  ngDoCheck() {
    console.log('Child : ngDoCheck');
  }
  ngOnDestroy() {
    console.log('Child : ngOnDestroy');
  }
}
