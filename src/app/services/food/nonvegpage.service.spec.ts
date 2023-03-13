import { TestBed } from '@angular/core/testing';

import { NonvegpageService } from './nonvegpage.service';

describe('NonvegpageService', () => {
  let service: NonvegpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NonvegpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
