import { Action } from '@ngrx/store';

const projectsReducer = (state = 0, action: Action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export let REDUCERS: any = {
    projects: projectsReducer
};

