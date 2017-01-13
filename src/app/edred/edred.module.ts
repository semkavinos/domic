import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EdRedComponent } from './edred.component';
import { routing } from './edred.router';
import { SharedModule } from '../shared/shared.module';

import { AceEditorDirective, AceEditorComponent } from 'ng2-ace-editor';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    EdRedComponent,
    AceEditorDirective,
    AceEditorComponent
  ],
  bootstrap: [
    EdRedComponent
  ]
})
export class EdRedModule {}
