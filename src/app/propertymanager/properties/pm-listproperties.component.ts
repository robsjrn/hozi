import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES ,Router} from '@angular/router';

import {IProperty} from '../pm-interfaces';
import { PmProductSrv } from '../services/pm-services.service';

import {LoadingIndicator} from '../../shared/LoadingIndicator';
import {LoadingService} from '../../shared/loadingsrv';





@Component({
     templateUrl: 'app/propertymanager/properties/pm-listproperties.component.html',
     providers: [PmProductSrv],
     directives: [LoadingIndicator]
})



export class PropertyListComponent implements OnInit {
  errorMessage: string;
  properties: IProperty[]; 
  propertyFilter: string = '';


     constructor(private _pmSrv: PmProductSrv,private _router: Router,private loadingService:LoadingService) {
             
      }
        ngOnInit() {
             this.loadingService.toggleLoadingIndicator(false);
             this._pmSrv.getProperty()
                     .subscribe(
                       properties => this.properties = properties,
                       error =>  this.errorMessage = <any>error);
        }

        addProperty(){
          this._router.navigate(['/addProperty']);
        }
}