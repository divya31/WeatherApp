import { TestBed } from '@angular/core/testing';

import { summaryService } from './summaryService';

describe('Summary', () => {
  let service: summaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(summaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
