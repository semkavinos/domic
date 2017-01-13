import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestEditComponent } from './testedit.component';
import { routing } from './testedit.router';
import { SharedModule } from '../shared/shared.module';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  imports: [
    DragulaModule,
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
