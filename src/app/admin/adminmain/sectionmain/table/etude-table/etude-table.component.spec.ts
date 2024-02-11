import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ETudeTableComponent } from './etude-table.component';

describe('ETudeTableComponent', () => {
  let component: ETudeTableComponent;
  let fixture: ComponentFixture<ETudeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ETudeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ETudeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
