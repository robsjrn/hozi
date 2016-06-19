import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import {AuthService} from './auth.service';
import {Iuser} from './iuser';

export class User {
  constructor(
    public username: string,
    public password: string) { }
}

@Component({
  moduleId: module.id,
  selector: 'hozi-login-app',
  templateUrl: './hozi-login.html',
   directives: [ROUTER_DIRECTIVES],
   providers: [HTTP_PROVIDERS,AuthService]
})

export class LoginCmp {
  errorMessage: any;
  private user = new User('','');
 


  constructor(private _authSrv: AuthService){

  }
   login(){
       console.log(this.user)
        this._authSrv.login(this.user)
                     .subscribe(
                      // properties => this.properties = properties,
                       Iuser => this.perfomLoginit(Iuser),
                       error =>  this.errorMessage = <any>error);
   }

   perfomLoginit(userdetails:Iuser){
     
      sessionStorage.setItem('token', userdetails.token);
      sessionStorage.setItem('role', userdetails.role);
      sessionStorage.setItem('allowedpath', userdetails.allowedpath);
      sessionStorage.setItem('names', userdetails.names);
      sessionStorage.setItem('PROFILE_IMG_SRC', userdetails.names);

      location.href=userdetails.homepage
      
      
    

   }

}
