import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { UnitComponent } from './unit.component';
import { routing } from './study_entity.router';
import { SharedModule } from '../shared/shared.module';
import{EntityService} from './service';
import { StudyEntityComponent } from './study_entity.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    UnitComponent,
    StudyEntityComponent
  ],
  providers: [ EntityService ],
  bootstrap: [
    UnitComponent
  ]
})
export class StudyEntityModule {}
