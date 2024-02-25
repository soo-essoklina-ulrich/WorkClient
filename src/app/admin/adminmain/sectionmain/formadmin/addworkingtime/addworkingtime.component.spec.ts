import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddworkingtimeComponent } from './addworkingtime.component';

describe('AddworkingtimeComponent', () => {
  let component: AddworkingtimeComponent;
  let fixture: ComponentFixture<AddworkingtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddworkingtimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddworkingtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
