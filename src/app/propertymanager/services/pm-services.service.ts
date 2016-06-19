import { Injectable,Inject } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import {IProperty} from '../pm-interfaces';

@Injectable()
export class PmProductSrv {
 private _appUrl
 constructor(private _http: Http,@Inject('ApiEndpoint') _ApiEndpoint) { 
   this._appUrl= _ApiEndpoint;
 }

  getProperty(): Observable<IProperty[]> {
        return this._http.get('http://192.168.100.4:4000/web/propertymanager/property')
            .map((response: Response) => <IProperty[]> response.json().properties)
         //   .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

   saveProperty(property: IProperty): Observable<any>{
       let body = JSON.stringify({ property });
       let tkn = sessionStorage.getItem('token');
       let headers = new Headers({ 'Content-Type': 'application/json' ,'token':tkn});
       let options = new RequestOptions({ headers: headers });
        return this._http.post(this._appUrl+'/property',body,options)
            .map((response: Response) => <any> response.json())
           // .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
   }   

 private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
  private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }    
}
