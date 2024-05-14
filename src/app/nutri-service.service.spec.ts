import { TestBed } from '@angular/core/testing';

import { NutriServiceService } from './nutri-service.service';

describe('NutriServiceService', () => {
  let service: NutriServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NutriServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
