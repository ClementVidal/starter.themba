var css = require("./style.scss");

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app';
platformBrowserDynamic().bootstrapModule(AppModule);