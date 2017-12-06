import { TestBed, inject } from '@angular/core/testing';

import { AuthserveService } from './authserve.service';

describe('AuthserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthserveService]
    });
  });

  it('should be created', inject([AuthserveService], (service: AuthserveService) => {
    expect(service).toBeTruthy();
  }));
});
