
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UploadPageComponent } from './upload-page.component';
import { AuthGuard } from '../core/_guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'uploads', component: UploadPageComponent, canActivate: [AuthGuard] }
    ])
  ]
})
export class UploadPageRoute { }
