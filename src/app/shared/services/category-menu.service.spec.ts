import { TestBed, inject } from '@angular/core/testing';

import { CategoryMenuService } from './category-menu.service';

describe('CategoryMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryMenuService]
    });
  });

  it('should be created', inject([CategoryMenuService], (service: CategoryMenuService) => {
    expect(service).toBeTruthy();
  }));
});
