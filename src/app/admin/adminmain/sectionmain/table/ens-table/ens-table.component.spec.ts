import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsTableComponent } from './ens-table.component';

describe('EnsTableComponent', () => {
  let component: EnsTableComponent;
  let fixture: ComponentFixture<EnsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnsTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
