import { TestBed } from '@angular/core/testing';

import { BankHolidaysService } from './bank-holidays.service';

describe('BankHolidaysService', () => {
  let service: BankHolidaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankHolidaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
