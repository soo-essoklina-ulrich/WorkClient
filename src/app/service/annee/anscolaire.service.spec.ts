import { TestBed } from '@angular/core/testing';

import { AnscolaireService } from './anscolaire.service';

describe('AnscolaireService', () => {
  let service: AnscolaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnscolaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
