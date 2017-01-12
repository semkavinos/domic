import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AuthComponent } from './auth.component';

const routes: Route[] = [
  {
    path: '',
    component: AuthComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
