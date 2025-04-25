import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculoListaComponent } from './vehiculo-lista/vehiculo-lista.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VehiculoListaComponent],
  exports: [VehiculoListaComponent],
})
export class VehiculoModule {}
