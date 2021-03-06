import { Injectable } from "@angular/core";

import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    public token: string;
    private authUrl = '/api/authenticate'; // TODO: change this URL to your authentication route!

    constructor(private http: Http){
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        let credentials = { username: username, password: password };

        return this.http.post(this.authUrl, JSON.stringify(credentials))
            .map((response: Response) => {
                let token = response.json() && response.json().id_token;
                if (token) {
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({username: username, token: token}));
                    // successful login
                    return true;
                }
                // failed login
                return false;
            })
            .catch(error => {
                console.log(error._body); // print exception message!
                return Observable.throw(error);
            });
    }

    // check if user is logged in
    isLoggedIn(): boolean {
        return (this.token != null) ? true : false;
    }

    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
