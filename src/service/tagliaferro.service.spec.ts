import { TestBed } from '@angular/core/testing';

import { TagliaferroService } from './tagliaferro.service';

describe('TagliaferroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TagliaferroService = TestBed.get(TagliaferroService);
    expect(service).toBeTruthy();
  });
});
