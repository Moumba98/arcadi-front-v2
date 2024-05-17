import { TestBed } from '@angular/core/testing';

import { VeterinaryRaportService } from './veterinary-raport.service';

describe('VeterinaryRaportService', () => {
  let service: VeterinaryRaportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinaryRaportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
