import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Study_entityComponent } from './study_entity.component';

const routes: Route[] = [
  {
    path: '',
    component: Study_entityComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
