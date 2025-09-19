import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantUpdateComponent } from './participant-update.component';

describe('ParticipantUpdateComponent', () => {
  let component: ParticipantUpdateComponent;
  let fixture: ComponentFixture<ParticipantUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantUpdateComponent]
    });
    fixture = TestBed.createComponent(ParticipantUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
