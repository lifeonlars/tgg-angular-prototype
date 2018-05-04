import { TestBed, inject } from '@angular/core/testing';

import { StoreApiService } from './store-api.service';

describe('StoreApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreApiService]
    });
  });

  it('should be created', inject([StoreApiService], (service: StoreApiService) => {
    expect(service).toBeTruthy();
  }));
});
