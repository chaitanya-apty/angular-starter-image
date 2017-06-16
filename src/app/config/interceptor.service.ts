import { Injectable } from "@angular/core";

import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";
import { Observable } from "rxjs";


@Injectable()
export class HttpInterceptor extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    // handling not authorized or token expired situation!
    request(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, this.getRequestOptionArgs(options))
          .catch((error: Response) => {
              if (error.status === 401 || error.status === 403){
                  console.log('The authentication token has expired or user is not authenticated!');
                  // do something!
              }
              return Observable.throw(error);
          });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getRequestOptionArgs(options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs) : RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }

        if (options.headers == null) {
            options.headers = new Headers();
            // append authorization token
            let storage = JSON.parse(localStorage.getItem('currentUser'));
            if (storage != null && storage.token != null) {
                options.headers.append('Authorization', 'Bearer ' + storage.token);
            }
        }
        // append content-type
        options.headers.append('Content-Type', 'application/json');
        return options;
    }
}
