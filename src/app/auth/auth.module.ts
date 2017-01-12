import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { routing } from './auth.router';
import { SharedModule } from '../shared/shared.module';
import {SigninComponent} from './signin/signin.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [
    AuthComponent, SigninComponent, LoginComponent
  ],
  bootstrap: [
    AuthComponent
  ]
})
export class AuthModule {}
