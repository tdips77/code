 import {Component, OnInit } from "@angular/core";
import { UserModel } from '../models/userModel';
import { Http, Response, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 

@Component({
  selector: 'page-contact',
  templateUrl: './page-contact.component.html'
})

export class PageContactComponent implements OnInit {
   user: UserModel;
     constructor(private Http:Http) {
    this.user = new UserModel();
  }

  ngOnInit() {
  }
  saveData(form: NgForm) {
   if (form.valid) {
      var us = this.user;
      //console.log(us);
      //this.loading = true;
  this.Http.post("http://50.112.212.37:9091/contactus", us).subscribe((res) => {
    if (res.status === 201) {
      //console.log('done')
     //location.reload();
        }
      }, (err) => {
        console.log(err);

     });
  setTimeout(() => {
      //console.log(formModel);
       location.reload();
      //alert('done!');
      //this.showmsg = true;
      //this.loading = false;
    }, 1000);
  }
  
}



}