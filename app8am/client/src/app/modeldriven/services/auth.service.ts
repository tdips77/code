import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'; // need to add

import { UserModel } from '../../models/userModel';

@Injectable()
export class AuthService {
    private apiAddress;
    private headers: Headers;
    constructor(private http: Http) {
        this.apiAddress = 'http://localhost:3000/api';
        this.headers = new Headers({ 'content-type': 'application/json' });
    }
    GetUsers(): Observable<UserModel[]> {
        return this.http.get(this.apiAddress).map((res) => {
            return res.json();
        }).catch((err) => Observable.throw(err));
    }
    GetUser(id: number): Observable<UserModel> {
        return this.http.get(this.apiAddress + '/' + id).map((res) => {
            return res.json();
        }).catch((err) => Observable.throw(err));
    }
    AddUser(user: UserModel): Observable<Response> {
        return this.http.post(this.apiAddress, JSON.stringify(user), { headers: this.headers }).catch((err) => Observable.throw(err));
    }
    UpdateUser(user: UserModel): Observable<Response> {
        return this.http.put(this.apiAddress + '/' + user.UserId, JSON.stringify(user),
            { headers: this.headers }).catch((err) => Observable.throw(err));
    }
    DeleteUser(id: number): Observable<Response> {
        return this.http.delete(this.apiAddress + '/' + id).catch((err) => Observable.throw(err));
    }
}
