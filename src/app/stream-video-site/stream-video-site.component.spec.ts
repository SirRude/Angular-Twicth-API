import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamVideoSiteComponent } from './stream-video-site.component';

describe('StreamVideoSiteComponent', () => {
  let component: StreamVideoSiteComponent;
  let fixture: ComponentFixture<StreamVideoSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamVideoSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamVideoSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
