import { TestBed } from '@angular/core/testing';

import { ProyectosService } from './proyecto.service';

describe('ProyectoService', () => {
  let service: ProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
