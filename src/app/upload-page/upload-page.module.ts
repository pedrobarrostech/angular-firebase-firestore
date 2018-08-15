import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { UploadPageComponent } from './upload-page.component';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [UploadPageComponent]
})
export class UploadPageModule { }
