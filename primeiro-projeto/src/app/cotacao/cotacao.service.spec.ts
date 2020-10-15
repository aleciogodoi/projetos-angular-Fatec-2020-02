import { TestBed } from '@angular/core/testing';

import { CotacaoService } from './cotacao.service';

describe('CotacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CotacaoService = TestBed.get(CotacaoService);
    expect(service).toBeTruthy();
  });
});
