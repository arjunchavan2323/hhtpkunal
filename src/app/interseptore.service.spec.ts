import { TestBed } from '@angular/core/testing';

import { InterseptoreService } from './interseptore.service';

describe('InterseptoreService', () => {
  let service: InterseptoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterseptoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
