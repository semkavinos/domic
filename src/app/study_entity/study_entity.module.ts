import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Study_entityComponent } from './study_entity.component';
import { routing } from './study_entity.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    Study_entityComponent
  ],
  bootstrap: [
    Study_entityComponent
  ]
})
export class Study_entityModule {}
