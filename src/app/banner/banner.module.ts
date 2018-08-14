import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { BannerComponent } from './banner.component';
import { BannerService } from './banner.service';

@NgModule({
  imports: [
    CoreModule
  ],
  declarations: [BannerComponent],
  providers: [BannerService]
})
export class BannerModule { }
