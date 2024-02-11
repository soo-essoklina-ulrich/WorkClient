import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereTableFormComponent } from './matiere-table-form.component';

describe('MatiereTableFormComponent', () => {
  let component: MatiereTableFormComponent;
  let fixture: ComponentFixture<MatiereTableFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatiereTableFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatiereTableFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
