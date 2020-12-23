import { TestBed } from '@angular/core/testing';

import { ProduitlistService } from './produitlist.service';

describe('ProduitlistService', () => {
  let service: ProduitlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
