import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltableComponent } from './alltable.component';

describe('AlltableComponent', () => {
  let component: AlltableComponent;
  let fixture: ComponentFixture<AlltableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlltableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
