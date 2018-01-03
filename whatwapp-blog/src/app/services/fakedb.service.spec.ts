import { TestBed, inject } from '@angular/core/testing';

import { FakedbService } from './fakedb.service';

describe('FakedbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakedbService]
    });
  });

  it('should be created', inject([FakedbService], (service: FakedbService) => {
    expect(service).toBeTruthy();
  }));
});
