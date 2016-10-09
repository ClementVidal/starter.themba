import {Component, AfterViewInit} from '@angular/core';

import {FoundationService} from '../foundation/foundation.service';

@Component({
    selector: 'th-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    constructor(private foundationService: FoundationService) {

    }

    ngAfterViewInit() {
        this.foundationService.initialize();
    }

}
