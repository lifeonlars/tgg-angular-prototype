import { TestBed, inject } from '@angular/core/testing';

import { ProductApiService } from './product-api.service';

describe('ProductApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductApiService]
    });
  });

  it('should be created', inject([ProductApiService], (service: ProductApiService) => {
    expect(service).toBeTruthy();
  }));
});
