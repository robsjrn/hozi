
import { provideRouter, RouterConfig } from '@angular/router';

import { PropertyListComponent } from './properties/pm-listproperties.component';
import { UnitsListComponent  } from './units/pm-listunits.component';
import { PropertyAddCmp  } from './properties/pm-addproperty';


 const routes: RouterConfig = [
    { path: '', component: PropertyListComponent },
    { path: 'properties', component: PropertyListComponent },
    { path: 'units', component: UnitsListComponent },
    { path: 'addProperty', component: PropertyAddCmp }
];
 export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];




