import { Injectable } from '@angular/core';
import { Trabajador } from '../interface/trabajadores.interface';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {
  private trabajador: Trabajador[] = [];

  constructor() { }

  addTrabajador(trabajador: Trabajador) {
    this.trabajador.push(trabajador);
  }

  getTrabajador(): Trabajador[] {
    return this.trabajador;
  }
}
