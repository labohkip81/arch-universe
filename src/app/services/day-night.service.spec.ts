import { TestBed } from '@angular/core/testing';

import { DayNightService } from './day-night.service';

describe('DayNightService', () => {
  let service: DayNightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayNightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
