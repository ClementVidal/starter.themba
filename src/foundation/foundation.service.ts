import {Injectable} from '@angular/core';

@Injectable()
export class FoundationService {

    initialize() {
        $(document).foundation();
    }
}