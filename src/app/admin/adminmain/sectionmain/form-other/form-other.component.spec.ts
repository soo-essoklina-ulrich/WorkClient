import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOtherComponent } from './form-other.component';

describe('FormOtherComponent', () => {
  let component: FormOtherComponent;
  let fixture: ComponentFixture<FormOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormOtherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
