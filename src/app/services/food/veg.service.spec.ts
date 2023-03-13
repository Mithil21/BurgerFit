import { TestBed } from '@angular/core/testing';

import { VegService } from './veg.service';

describe('VegService', () => {
  let service: VegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
