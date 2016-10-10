import {Component, AfterViewInit} from '@angular/core';

import {Store, State} from '../store';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

    constructor( private store:Store<any>, private state: State<any> ) {
        store.dispatch( { type: 'ADD_HOUR' });
        store.subscribe( (s) => console.log( s ) );
        store.dispatch( { type: 'ADD_HOUR' });
        store.dispatch( { type: 'ADD_HOUR' });

    } 

    ngAfterViewInit() {
    }

}
