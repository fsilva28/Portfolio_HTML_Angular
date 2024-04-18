import { TestBed } from '@angular/core/testing';

import { StatusocorrenciaService } from './statusocorrencia.service';

describe('StatusocorrenciaService', () => {
  let service: StatusocorrenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatusocorrenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
