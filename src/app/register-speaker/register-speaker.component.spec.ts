import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpeakerComponent } from './register-speaker.component';

describe('RegisterSpeakerComponent', () => {
  let component: RegisterSpeakerComponent;
  let fixture: ComponentFixture<RegisterSpeakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSpeakerComponent]
    });
    fixture = TestBed.createComponent(RegisterSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
