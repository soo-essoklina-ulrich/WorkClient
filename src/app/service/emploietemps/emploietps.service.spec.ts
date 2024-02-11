import { TestBed } from '@angular/core/testing';

import { EmploietpsService } from './emploietps.service';

describe('EmsploietpsService', () => {
  let service: EmploietpsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploietpsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
