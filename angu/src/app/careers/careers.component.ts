import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User } from '../models/user';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; 

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html'
})

export class CareersComponent {
 form: FormGroup;
  loading: boolean = false;
display='none';

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private fb: FormBuilder, private http : Http) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      phone: [null, Validators.pattern('^[789]\\d{9}$')],
      email: [null, [Validators.required, Validators.email]],
      position: [null, Validators.required],
      avatar: [null, Validators.required]
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        }) 
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    this.loading = true;
     this.http.post('http://50.112.212.37:9091/career', formModel).subscribe((res) => {
    if (res.status === 200) {
        }
      }, (err) => {
        console.log(err);

     });
    setTimeout(() => {
      //console.log(formModel);
       location.reload();
      //alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.form.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
   openModal(){
       this.display='block'; 
    }

 onCloseHandled(){
       this.display='none'; 
    }
}