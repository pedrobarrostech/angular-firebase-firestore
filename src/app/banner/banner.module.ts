import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { BannerComponent } from './banner.component';
import { BannerService } from './banner.service';
import { BannerRoute } from './banner.route';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
@NgModule({
  imports: [
    CoreModule,
    BannerRoute,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  declarations: [BannerComponent],
  providers: [BannerService]
})
export class BannerModule { }
