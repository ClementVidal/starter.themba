import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRouteModule } from './app.routing';
import { MODULE as STORE_MODULE } from './store';

import { DECLARATIONS as HOME_DECLARATIONS } from './home';
import { DECLARATIONS as PAGE_NOT_FOUND_DECLARATIONS } from './page-not-found';

@NgModule({
    imports: [
        BrowserModule,
        appRouteModule,
        STORE_MODULE
    ],
    declarations: [
        AppComponent,
        HOME_DECLARATIONS,
        PAGE_NOT_FOUND_DECLARATIONS
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
