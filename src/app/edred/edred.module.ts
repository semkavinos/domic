import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AceEditorDirective } from 'ng2-ace-editor';

import { EdRedComponent } from './edred.component';
import { routing } from './edred.router';
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
    EdRedComponent
  ],
  bootstrap: [
    EdRedComponent
  ]
})
export class EdRedModule {}
