import { Component, Input } from '@angular/core';

import { BannerService } from '../banner.service';

@Component({
  selector: 'banner-detail',
  templateUrl: './banner-detail.component.html',
  styleUrls: ['./banner-detail.component.scss'],
})
export class BannerDetailComponent {

  @Input() banner: any;

  constructor(private bannerService: BannerService) { }

  addHeartToBanner(val: number) {
    if (this.banner.id) {
      this.bannerService.update(this.banner.id, { hearts: val + 1 });
    } else {
      console.error('Banner missing ID!');
    }
  }

  deleteBanner(id: string) {
    this.bannerService.delete(id);
  }

}
