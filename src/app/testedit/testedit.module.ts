import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestEditComponent } from './testedit.component';
import { routing } from './testedit.router';
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
    TestEditComponent
  ],
  bootstrap: [
    TestEditComponent
  ]
})
export class TestEditModule {}
