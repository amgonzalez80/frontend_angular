import { TestBed } from '@angular/core/testing';

import { UnidadesService } from './unidades.service';

describe('UnidadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnidadesService = TestBed.get(UnidadesService);
    expect(service).toBeTruthy();
  });
});
