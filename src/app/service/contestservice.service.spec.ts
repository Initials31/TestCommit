import { TestBed } from '@angular/core/testing';

import { ContestserviceService } from './contestservice.service';

describe('ContestserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContestserviceService = TestBed.get(ContestserviceService);
    expect(service).toBeTruthy();
  });
});
