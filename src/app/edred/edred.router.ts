import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { EdRedComponent } from './edred.component';

const routes: Route[] = [
  {
    path: '',
    component: EdRedComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);