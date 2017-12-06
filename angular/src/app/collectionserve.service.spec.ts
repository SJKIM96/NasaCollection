import { TestBed, inject } from '@angular/core/testing';

import { CollectionserveService } from './collectionserve.service';

describe('CollectionserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionserveService]
    });
  });

  it('should be created', inject([CollectionserveService], (service: CollectionserveService) => {
    expect(service).toBeTruthy();
  }));
});
