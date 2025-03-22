import { TestBed } from '@angular/core/testing';

import { MpUiToolkitService } from './mp-ui-toolkit.service';

describe('MpUiToolkitService', () => {
  let service: MpUiToolkitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MpUiToolkitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
