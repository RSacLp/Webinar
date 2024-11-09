import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'; // Importa AngularFireDatabase
import { Trabajador } from '../interface/trabajadores.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorFirebaseService {
  private dbPath = '/trabajadores'; // Ruta de la base de datos en Firebase

  constructor(private db: AngularFireDatabase) {}

  // Método para agregar un nuevo estudiante a la base de datos en Firebase
  addTrabajador(trabajador: Trabajador): void {
    this.db.list(this.dbPath).push(trabajador);
    console.log('Trabajador guardado en Firebase:', trabajador);
  }

  // Método para obtener la lista de estudiantes desde Firebase
  getTrabajador(): Observable<Trabajador[]> {
    return this.db.list<Trabajador>(this.dbPath).valueChanges();
  }
}
