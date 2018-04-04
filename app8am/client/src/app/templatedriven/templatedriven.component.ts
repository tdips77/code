import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/userModel';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styles: []
})
export class TemplatedrivenComponent implements OnInit {
  user: UserModel;
  constructor() {
    this.user = new UserModel();
  }

  ngOnInit() {
  }
  saveData(form: NgForm) {
    if (form.valid) {
      alert('valid!');
      console.log(this.user);
    }
  }
}
