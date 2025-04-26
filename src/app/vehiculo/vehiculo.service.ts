import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Vehiculo } from './vehiculo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getVehiculos() {
    return this.http.get<Vehiculo[]>(this.apiUrl);
  }
}
