import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantRegisterComponent } from './participant-register.component';

describe('ParticipantRegisterComponent', () => {
  let component: ParticipantRegisterComponent;
  let fixture: ComponentFixture<ParticipantRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantRegisterComponent]
    });
    fixture = TestBed.createComponent(ParticipantRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
