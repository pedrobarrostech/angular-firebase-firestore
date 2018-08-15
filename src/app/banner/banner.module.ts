import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { BannerComponent } from './banner.component';
import { BannerService } from './banner.service';
import { BannerRoute } from './banner.route';
@NgModule({
  imports: [
    CoreModule,
    BannerRoute
  ],
  declarations: [BannerComponent],
  providers: [BannerService]
})
export class BannerModule { }
