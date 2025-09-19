import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantSidebarComponent } from './participant-sidebar.component';

describe('ParticipantSidebarComponent', () => {
  let component: ParticipantSidebarComponent;
  let fixture: ComponentFixture<ParticipantSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantSidebarComponent]
    });
    fixture = TestBed.createComponent(ParticipantSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
