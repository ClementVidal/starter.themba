import { bootstrap }    from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import {AppComponent} from './app/app.component'
import {FoundationService} from './foundation/foundation.service';


bootstrap(AppComponent,
    [
        disableDeprecatedForms(),
        provideForms(),
        FoundationService
    ]);
