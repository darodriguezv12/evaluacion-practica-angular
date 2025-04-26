import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-lista',
  templateUrl: './vehiculo-lista.component.html',
  styleUrls: ['./vehiculo-lista.component.css'],
  standalone: false,
})
export class VehiculoListaComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  totalVehiculosPorMarca: Array<{ marca: string; cantidad: number }> = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.definirTotalVehiculosPorMarca();
    });
  }

  definirTotalVehiculosPorMarca() {
    this.vehiculos.forEach((vehiculo) => {
      const marca = vehiculo.marca;
      const vehiculoExistente = this.totalVehiculosPorMarca.find(
        (v) => v.marca === marca
      );

      if (vehiculoExistente) {
        vehiculoExistente.cantidad++;
      } else {
        this.totalVehiculosPorMarca.push({ marca, cantidad: 1 });
      }
    });
  }
}
