import { Injectable } from '@angular/core';
import { Student } from '../interfaces/estudiante.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private estudiantes: Student[] = [];

  constructor() { }

  addStudent(student: Student) {
    this.estudiantes.push(student);
  }

  getStudents(): Student[] {
    return this.estudiantes;
  }
}
