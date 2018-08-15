
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SsrPageComponent } from './ssr-page.component';
import { AuthGuard } from '../../core/_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ssr', component: SsrPageComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class SsrPageRoute { }
