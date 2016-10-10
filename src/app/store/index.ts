
// Re export symbol for commodity
export { Store, Action, State } from '@ngrx/store';


import { REDUCERS as PROJECTS_REDUCER } from './projects.reducer';

var REDUCERS = Object.assign({}, PROJECTS_REDUCER);

export var PROVIDERS: Array<any> = [];

const initialState = {

}

import { StoreModule, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';

export const MODULE =
    StoreModule.provideStore(
        compose(
            storeLogger({ collapsed: true }),
            combineReducers
        )(REDUCERS), 
        initialState);