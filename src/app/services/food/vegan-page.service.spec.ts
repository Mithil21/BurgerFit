import { TestBed } from '@angular/core/testing';

import { VeganPageService } from './vegan-page.service';

describe('VeganPageService', () => {
  let service: VeganPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeganPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
