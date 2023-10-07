import { TestBed } from '@angular/core/testing';

import { MaheService } from './mahe.service';

describe('MaheService', () => {
  let service: MaheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
