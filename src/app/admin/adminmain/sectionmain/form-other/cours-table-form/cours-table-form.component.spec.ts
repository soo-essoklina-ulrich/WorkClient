import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursTableFormComponent } from './cours-table-form.component';

describe('CoursTableFormComponent', () => {
  let component: CoursTableFormComponent;
  let fixture: ComponentFixture<CoursTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursTableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
