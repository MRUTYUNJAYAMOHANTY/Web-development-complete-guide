import { TestBed } from '@angular/core/testing';

import { CommonLibService } from './common-lib.service';

describe('CommonLibService', () => {
  let service: CommonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
