import 'core-js';
import 'reflect-metadata';

require('zone.js/dist/zone');

if (build.environment !== 'prod') {
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}