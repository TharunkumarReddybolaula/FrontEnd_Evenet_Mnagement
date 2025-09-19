import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePromocodeComponent } from './create-promocode.component';

describe('CreatePromocodeComponent', () => {
  let component: CreatePromocodeComponent;
  let fixture: ComponentFixture<CreatePromocodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePromocodeComponent]
    });
    fixture = TestBed.createComponent(CreatePromocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
