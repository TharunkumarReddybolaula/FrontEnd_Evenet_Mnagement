import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePromocodeComponent } from './delete-promocode.component';

describe('DeletePromocodeComponent', () => {
  let component: DeletePromocodeComponent;
  let fixture: ComponentFixture<DeletePromocodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePromocodeComponent]
    });
    fixture = TestBed.createComponent(DeletePromocodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
