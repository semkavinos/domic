import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CourceComponent } from './cource.component';
import { routing } from './cource.router';
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
    CourceComponent
  ],
  bootstrap: [
    CourceComponent
  ]
})
export class CourceModule {}
