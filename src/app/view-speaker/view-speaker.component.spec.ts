import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpeakerComponent } from './view-speaker.component';

describe('ViewSpeakerComponent', () => {
  let component: ViewSpeakerComponent;
  let fixture: ComponentFixture<ViewSpeakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSpeakerComponent]
    });
    fixture = TestBed.createComponent(ViewSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
