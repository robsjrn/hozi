import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode,provide } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_BINDINGS} from '@angular/http';


import { PropertyManagerCmp, environment } from './app/';

import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-maps/core';
import {APP_ROUTER_PROVIDERS} from './app/propertymanager/pm-routes';
import {PmProductSrv} from './app/propertymanager/services/pm-services.service';

import {LoadingService} from './app/shared/loadingsrv';

if (environment.production) {
  enableProdMode();
}

bootstrap(PropertyManagerCmp,[
        GOOGLE_MAPS_PROVIDERS,
        HTTP_BINDINGS,
        APP_ROUTER_PROVIDERS,
        PmProductSrv,
        LoadingService,
        provide(LocationStrategy, {useClass: HashLocationStrategy}),
        provide('ApiEndpoint', {useValue: 'http://127.0.0.1:4000/web/propertymanager'})
       
       ]);

