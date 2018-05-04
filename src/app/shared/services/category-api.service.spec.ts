import { TestBed, inject } from '@angular/core/testing';

import { CategoryApiService } from './category-api.service';

describe('CategoryApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryApiService]
    });
  });

  it('should be created', inject([CategoryApiService], (service: CategoryApiService) => {
    expect(service).toBeTruthy();
  }));
});
