import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TestEditComponent } from './testedit.component';

const routes: Route[] = [
  {
    path: '',
    component: TestEditComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
