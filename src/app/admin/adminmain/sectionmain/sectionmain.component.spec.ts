import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionmainComponent } from './sectionmain.component';

describe('SectionmainComponent', () => {
  let component: SectionmainComponent;
  let fixture: ComponentFixture<SectionmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
