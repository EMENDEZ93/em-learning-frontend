import { TestBed } from '@angular/core/testing';

import { RegistrerService } from './registrer.service';

describe('RegistrerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrerService = TestBed.get(RegistrerService);
    expect(service).toBeTruthy();
  });
});
