import { MinibannerModule } from './minibanner.module';

describe('MinibannersModule', () => {
  let bannersModule: MinibannerModule;

  beforeEach(() => {
    bannersModule = new MinibannerModule();
  });

  it('should create an instance', () => {
    expect(bannersModule).toBeTruthy();
  });
});
