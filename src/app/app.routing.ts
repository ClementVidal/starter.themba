import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectListComponent} from './project-list';
import {HomeComponent} from './home';
import {PageNotFoundComponent} from './page-not-found';

const routes: Routes = [
  { path: 'projects', component: ProjectListComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouteModule: ModuleWithProviders = RouterModule.forRoot(routes);