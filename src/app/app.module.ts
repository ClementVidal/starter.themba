import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//import {YevaModule } from '__TITLE__';
import {YevaModule } from './yeva.module';
import {PROVIDERS as FOUNDATION_PROVIDERS} from '../foundation';

@NgModule({
  imports: [BrowserModule,YevaModule],
  declarations: [AppComponent],
  providers: [
    FOUNDATION_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
