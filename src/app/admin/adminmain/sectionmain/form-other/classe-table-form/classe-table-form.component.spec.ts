import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasseTableFormComponent } from './classe-table-form.component';

describe('ClasseTableFormComponent', () => {
  let component: ClasseTableFormComponent;
  let fixture: ComponentFixture<ClasseTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasseTableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasseTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
