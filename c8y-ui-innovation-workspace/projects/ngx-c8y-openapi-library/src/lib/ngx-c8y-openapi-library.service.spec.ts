import { TestBed } from '@angular/core/testing';

import { NgxC8yOpenapiLibraryService } from './ngx-c8y-openapi-library.service';

describe('NgxC8yOpenapiLibraryService', () => {
  let service: NgxC8yOpenapiLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxC8yOpenapiLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
