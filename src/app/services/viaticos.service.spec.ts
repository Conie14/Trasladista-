import { TestBed } from '@angular/core/testing';

import { ViaticosService } from './viaticos.service';

describe('ViaticosService', () => {
  let service: ViaticosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViaticosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
