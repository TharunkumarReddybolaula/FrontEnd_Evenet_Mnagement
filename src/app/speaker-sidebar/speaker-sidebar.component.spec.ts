import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerSidebarComponent } from './speaker-sidebar.component';

describe('SpeakerSidebarComponent', () => {
  let component: SpeakerSidebarComponent;
  let fixture: ComponentFixture<SpeakerSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakerSidebarComponent]
    });
    fixture = TestBed.createComponent(SpeakerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
