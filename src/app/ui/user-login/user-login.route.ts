
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: UserLoginComponent }
    ])
  ]
})
export class UserLoginRoute { }
