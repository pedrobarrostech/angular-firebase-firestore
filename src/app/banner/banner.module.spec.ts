import { BannerModule } from './banner.module';

describe('BannersModule', () => {
  let bannersModule: BannerModule;

  beforeEach(() => {
    bannersModule = new BannerModule();
  });

  it('should create an instance', () => {
    expect(bannersModule).toBeTruthy();
  });
});
