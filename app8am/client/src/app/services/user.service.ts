import { Injectable } from '@angular/core';
import { User } from '../models/user';

// @Injectable()
export class UserService {
    user: User;
    constructor() { }
    ValidateUser(username: string, password: string): boolean {
        if (username !== '' && password !== '') {
            this.user = new User('Deepa', 'Deepa Tyagi');
            return true;
        }
        else {
            return false;
        }
    }
}
