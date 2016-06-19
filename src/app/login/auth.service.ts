import { Injectable,Inject } from '@angular/core';
import { Http, Response, Headers,RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import {Iuser} from './iuser';

@Injectable()
export class AuthService {
  private _appUrl



  

  constructor(private _http: Http,@Inject('ApiEndpoint') _ApiEndpoint) {
    this._appUrl=_ApiEndpoint
  }
  

  login(user:any): Observable<Iuser> {

    let body = JSON.stringify({ user });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

        return this._http.post('http://192.168.100.4:4000/web/Login',body,options)
            .map((response: Response) => <Iuser> response.json())
           // .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

 private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json() || 'Server error');
    }

private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}  



}
