import { TestBed } from '@angular/core/testing';

import { NonvegService } from './nonveg.service';

describe('NonvegService', () => {
  let service: NonvegService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonvegService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
