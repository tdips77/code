import {Component, OnInit } from "@angular/core";
import { UserModel } from '../models/userModel';
import { Http, Response, Headers } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: ['#form.contact-section{display:none;}']
}) 
export class FormComponent implements OnInit{
 user: UserModel;
 newuser: string;
 showSelected : boolean;
   
  constructor(private Http:Http) {
    this.newuser = "Hi";
    this.user = new UserModel();
    this.showSelected = false;   
  }

 ShowButton(){
        this.showSelected = true;
    }
    HideButton(){
        this.showSelected = false;
    }
/*onChange(event) {
    var files = event.srcElement.file;
    console.log(files);
  }*/

   ngOnInit() {
  }
  saveData(form: NgForm) {
   if (form.valid) {
      var use = this.user;
      //console.log(use);
      //this.loading = true;
     this.Http.post("http://50.112.212.37:9091/formData", use).subscribe((res) => {
    if (res.status === 201) {
      //console.log('done')
        }
      }, (err) => {
        console.log(err);

     });
      setTimeout(() => {
      //console.log(formModel);
       location.reload();
      //alert('done!');
      //this.showmsg = true;
     // this.loading = false;
    }, 1000);
     
  }
  }




}
