/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { VehiculoListaComponent } from './vehiculo-lista.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiculoService } from '../vehiculo.service';
import { Vehiculo } from '../vehiculo';
import { faker } from '@faker-js/faker';
import { DebugElement } from '@angular/core';

describe('VehiculoListaComponent', () => {
  let component: VehiculoListaComponent;
  let debug: DebugElement;
  let fixture: ComponentFixture<VehiculoListaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [VehiculoListaComponent],
      providers: [VehiculoService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoListaComponent);
    component = fixture.componentInstance;

    let cantidadVehiculos = 3;
    for (let i = 0; i < cantidadVehiculos; i++) {
      const vehiculo = new Vehiculo(
        i + 1,
        faker.vehicle.manufacturer(),
        faker.vehicle.model(),
        faker.vehicle.type(),
        faker.number.int({ min: 1950, max: 2025 }),
        faker.number.int({ min: 0, max: 300000 }),
        faker.color.human(),
        faker.internet.url()
      );

      component.vehiculos.push(vehiculo);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('El componente debería ser creado', () => {
    expect(component).toBeTruthy();
  });

  it('El componente debería tener una cabecera de tabla con 4 columnas para #, Marca, Línea, Modelo', () => {
    const headers = debug.queryAll((el) => el.name === 'th');
    expect(headers.length).toBe(4);
    expect(headers[0].nativeElement.textContent.trim()).toBe('#');
    expect(headers[1].nativeElement.textContent.trim()).toBe('Marca');
    expect(headers[2].nativeElement.textContent.trim()).toBe('Línea');
    expect(headers[3].nativeElement.textContent.trim()).toBe('Modelo');
  });

  it('La tabla debería tener 3 filas en el cuerpo y estas deberían ser válidas', () => {
    const rows = debug.queryAll(
      (el) => el.name === 'tr' && el.parent?.name === 'tbody'
    );
    expect(rows.length).toBe(3);

    rows.forEach((row, index) => {
      const cells = row.queryAll((el) => el.name === 'td');
      expect(cells.length).toBe(4);
      expect(cells[0].nativeElement.textContent.trim()).toBe(
        (index + 1).toString()
      );
      expect(cells[1].nativeElement.textContent.trim()).toBeTruthy();
      expect(cells[2].nativeElement.textContent.trim()).toBeTruthy();
      expect(cells[3].nativeElement.textContent.trim()).toBeTruthy();
    });
  });
});
