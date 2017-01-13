import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CourceComponent } from './cource.component';

const routes: Route[] = [
  {
    path: '',
    component: CourceComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
