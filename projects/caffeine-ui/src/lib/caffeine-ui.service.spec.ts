import { TestBed } from '@angular/core/testing';

import { CaffeineUiService } from './caffeine-ui.service';

describe('CaffeineUiService', () => {
  let service: CaffeineUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaffeineUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
