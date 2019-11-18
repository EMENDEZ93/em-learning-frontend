import { TestBed } from '@angular/core/testing';

import { PresentVerbService } from './present-verb.service';

describe('PresentVerbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentVerbService = TestBed.get(PresentVerbService);
    expect(service).toBeTruthy();
  });
});
