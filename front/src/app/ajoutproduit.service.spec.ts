import { TestBed } from '@angular/core/testing';

import { AjoutproduitService } from './ajoutproduit.service';

describe('AjoutproduitService', () => {
  let service: AjoutproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
