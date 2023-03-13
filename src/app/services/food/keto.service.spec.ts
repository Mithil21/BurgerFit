import { TestBed } from '@angular/core/testing';

import { KetoService } from './keto.service';

describe('KetoService', () => {
  let service: KetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
