import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { UploadPageComponent } from './upload-page.component';
import { UploadPageRoute } from './upload-page.route';
@NgModule({
  imports: [
    CoreModule,
    UploadPageRoute
  ],
  declarations: [UploadPageComponent]
})
export class UploadPageModule { }
