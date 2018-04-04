import { Component, OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-parenthooks',
  templateUrl: './parenthooks.component.html',
  styles: []
})
export class ParenthooksComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  company: string;
  constructor() {
    this.company = 'Dot Net Tricks';
    console.log('Parent : constructor');
  }

  ngOnInit() {
    console.log('Parent : ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent : ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent : ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('Parent : ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('Parent : AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('Parent : AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('Parent : AfterViewChecked');
  }
  ngOnDestroy() {
    console.log('Parent : ngOnDestroy');
  }

}
