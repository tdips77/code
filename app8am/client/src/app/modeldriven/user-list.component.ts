import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserModel } from '../models/userModel';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {
  users: UserModel[];
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.GetUsers().subscribe((res) => {
      this.users = res;
    }, (err) => {
      console.log('Error :' + err);
    });
  }

  DeleteUser(id: number) {
    if (confirm('Are you sure to delete?')) {
      this.authService.DeleteUser(id).subscribe((res) => {
        if (res.status === 200) {
          for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].UserId === id) {
              this.users.splice(i, 1);
            }
          }
        }
      }, (err) => { });
    }
  }
}
