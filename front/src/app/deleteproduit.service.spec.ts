import { TestBed } from '@angular/core/testing';

import { DeleteproduitService } from './deleteproduit.service';

describe('DeleteproduitService', () => {
  let service: DeleteproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
