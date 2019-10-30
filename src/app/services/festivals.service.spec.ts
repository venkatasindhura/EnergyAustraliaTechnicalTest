import { TestBed } from '@angular/core/testing';

import { FestivalsService } from './festivals.service';

describe('FestivalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FestivalsService = TestBed.get(FestivalsService);
    expect(service).toBeTruthy();
  });
});
