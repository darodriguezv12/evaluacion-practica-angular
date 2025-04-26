/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { VehiculoService } from './vehiculo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Vehiculo', () => {
  let service: VehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculoService],
    });
    service = TestBed.inject(VehiculoService);
  });

  it('Debería ser creado', inject(
    [VehiculoService],
    (service: VehiculoService) => {
      expect(service).toBeTruthy();
    }
  ));
});
