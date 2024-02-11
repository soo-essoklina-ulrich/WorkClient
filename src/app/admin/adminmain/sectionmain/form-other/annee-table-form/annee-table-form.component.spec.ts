import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneeTableFormComponent } from './annee-table-form.component';

describe('AnneeTableFormComponent', () => {
  let component: AnneeTableFormComponent;
  let fixture: ComponentFixture<AnneeTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnneeTableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnneeTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
