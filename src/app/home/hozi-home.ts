import { Component } from '@angular/core';
import {  ROUTER_DIRECTIVES } from '@angular/router';



@Component({
  moduleId: module.id,
  selector: 'hozi-app',
  templateUrl: './hozi-home.html',
   directives: [ROUTER_DIRECTIVES]
})
export class HoziAppComponent {
  title = 'hozi works!';
}

export class HoziHomeCmp {
  title = 'hozi works!';
}
