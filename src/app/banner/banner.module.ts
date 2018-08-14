import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BannerComponent } from './banner.component';
import { BannerService } from './banner.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BannerComponent],
  providers: [BannerService]
})
export class BannerModule { }
