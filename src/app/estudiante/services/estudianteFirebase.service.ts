import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'; // Importa AngularFireDatabase
import { Student } from '../interfaces/estudiante.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteFirebaseService {
  private dbPath = '/students'; // Ruta de la base de datos en Firebase

  constructor(private db: AngularFireDatabase) {}

  // Método para agregar un nuevo estudiante a la base de datos en Firebase
  addStudent(student: Student): void {
    this.db.list(this.dbPath).push(student);
    console.log('Estudiante guardado en Firebase:', student);
  }

  // Método para obtener la lista de estudiantes desde Firebase
  getStudents(): Observable<Student[]> {
    return this.db.list<Student>(this.dbPath).valueChanges();
  }
}
