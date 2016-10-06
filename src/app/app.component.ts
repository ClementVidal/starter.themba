import {Component, AfterViewInit} from '@angular/core';


@Component({
    selector: 'th-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')]
})
export class AppComponent implements AfterViewInit {

    constructor() {

    }

    ngAfterViewInit() {
    }

}
