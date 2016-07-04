import {Component} from '@angular/core';

import {FoundationService} from '../foundation/foundation.service';

@Component({
    selector: 'th-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')]
})
export class AppComponent {

    constructor( private foundationService: FoundationService) {

    }

    ngAfterViewInit() {
        this.foundationService.initialize();
    }

}
