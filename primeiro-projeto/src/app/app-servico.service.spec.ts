import { TestBed } from '@angular/core/testing';

import { AppServicoService } from './app-servico.service';

describe('AppServicoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppServicoService = TestBed.get(AppServicoService);
    expect(service).toBeTruthy();
  });
});
