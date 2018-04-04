import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styles: []
})
export class ModeldrivenComponent implements OnInit {
  userForm: FormGroup;
  countries: any[];
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.userForm = fb.group({
      Name: [null, Validators.required],
      Username: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, Validators.required],
      Country: ['', Validators.required],
      ConfirmPassword: [null, Validators.required],
      Contact: [null, Validators.pattern('^[789]\\d{9}$')],
      Terms: [null, Validators.required]
    });
  }

  ngOnInit() {
    this.countries = [{ id: 1, name: 'India' }, { id: 2, name: 'USA' }, { id: 3, name: 'UK' }];
  }
  saveData(form: NgForm) {
    if (form.valid) {
     var us = this.userForm;
     console.log(us);
      this.authService.AddUser(form.value).subscribe((res) => {
        if (res.status === 201) {
          this.router.navigate(['users']);
        }
      }, (err) => {
        console.log(err);
      });
    }
  }
}
