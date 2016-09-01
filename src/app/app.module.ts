import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {PROVIDERS as FOUNDATION_PROVIDERS} from '../foundation';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent],
  providers: [
    FOUNDATION_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }