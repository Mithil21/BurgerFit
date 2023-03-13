import { TestBed } from '@angular/core/testing';

import { VegpageService } from './vegpage.service';

describe('VegpageService', () => {
  let service: VegpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VegpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
