import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestComponentService {

    constructor(private http: Http) {}

    getAllUsers(): Observable<any> {
        let url = '/api/users';

        return this.http.get(url)
          .map((response: Response) => {
            return response.json();
          })
          .catch(error => {
              console.log('USERS: ' + error._body);
              return Observable.throw(error);
          });
    }
}
