import { TestBed } from '@angular/core/testing';

import { ReviewPresenService } from './review-presen.service';

describe('ReviewPresenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewPresenService = TestBed.get(ReviewPresenService);
    expect(service).toBeTruthy();
  });
});
