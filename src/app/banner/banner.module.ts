import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { BannerListComponent } from './banner-list/banner-list.component';
import { BannerDetailComponent } from './banner-detail/banner-detail.component';
import { BannerService } from './banner.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BannerListComponent, BannerDetailComponent],
  providers: [BannerService]
})
export class BannerModule { }
