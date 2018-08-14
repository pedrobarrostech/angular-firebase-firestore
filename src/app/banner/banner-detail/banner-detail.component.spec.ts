import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerDetailComponent } from './banner-detail.component';
import { BannerService } from '../banner.service';
import { FormsModule } from '@angular/forms';


xdescribe('BannerDetailComponent', () => {
  let component: BannerDetailComponent;
  let fixture: ComponentFixture<BannerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerDetailComponent ],
      providers: [ { provide: BannerService, useValue: { }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
