import { TestBed, inject } from '@angular/core/testing';

import { TrackerdataService } from './trackerdata.service';

describe('TrackerdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackerdataService]
    });
  });

  it('should be created', inject([TrackerdataService], (service: TrackerdataService) => {
    expect(service).toBeTruthy();
  }));
});
