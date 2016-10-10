import '@angular/common';
import '@angular/compiler';
import '@angular/core';
import '@angular/forms';
import '@angular/http';
import '@angular/platform-browser-dynamic';
import '@angular/router';

// Polyfills
import 'core-js';
import 'reflect-metadata';

require('zone.js/dist/zone');

if (build.environment !== 'prod') {
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}