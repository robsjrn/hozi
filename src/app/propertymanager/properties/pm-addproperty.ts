import { Component, OnInit,Input } from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';
import {FORM_DIRECTIVES} from '@angular/common';
import {IProperty} from '../pm-interfaces';
import { GOOGLE_MAPS_DIRECTIVES, MouseEvent } from 'angular2-google-maps/core';

import { PmProductSrv } from '../services/pm-services.service';

@Component({
     templateUrl: 'app/propertymanager/properties/pm-addproperty.html',
     directives: [GOOGLE_MAPS_DIRECTIVES,FORM_DIRECTIVES]
})


export class PropertyAddCmp implements OnInit  {

    property: IProperty; 
    errorMessage:string;
   
    lat: number = -1.845383988573187;
    lng: number = 36.9580078125;

    PropertyType=['Apartments','Land','Office'];

    constructor(private _pmSrv: PmProductSrv){

    }

  ngOnInit():void {
     
    }

  mapClicked($event: MouseEvent) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }
  onSave(value:any){
 
  this.property=value;
  this.property.location.lat=this.lat;
  this.property.location.lng=this.lng;
   console.log(this.property);
   this._pmSrv.saveProperty(this.property)
                     .subscribe(
                      // properties => this.properties = properties,
                       data => this.afterSave(data),
                       error =>  this.errorMessage = <any>error);


}
afterSave(details:any){
console.log("*******************");
console.log(details);
console.log("*******************");
}
}