import { RouterModule, Route } from '@angular/router';
import { NgModule }            from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { StudyEntityComponent } from './study_entity.component';

const routes: Route[] = [
  {
    path: ':id',
    component: StudyEntityComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
