import { TestBed } from '@angular/core/testing';

import { KetopageService } from './ketopage.service';

describe('KetopageService', () => {
  let service: KetopageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KetopageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
