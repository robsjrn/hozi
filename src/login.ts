import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode,provide } from '@angular/core';
import { LoginCmp, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(LoginCmp, [
        provide('ApiEndpoint', {useValue: 'http://127.0.0.1:4000/web'})
]);

