import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantEventenrollComponent } from './participant-eventenroll.component';
describe('ParticipantEventenrollComponent', () => {
  let component: ParticipantEventenrollComponent;
  let fixture: ComponentFixture<ParticipantEventenrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParticipantEventenrollComponent]
    });
    fixture = TestBed.createComponent(ParticipantEventenrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
