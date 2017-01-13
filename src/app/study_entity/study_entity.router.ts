import { RouterModule, Route } from '@angular/router';
import { NgModule }            from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { UnitComponent } from './unit.component';
import { StudyEntityComponent } from './study_entity.component';

const routes: Route[] = [
  {
    path: ':id',
    component: UnitComponent
  },
  {
    path: '',
    component: StudyEntityComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
