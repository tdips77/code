import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  Username: string;
  Password: string;
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
  }
  loginUser() {
    const status = this.userService.ValidateUser(this.Username, this.Password);
    if (status) {
      this.router.navigate(['dashboard']);
    }
  }
}
