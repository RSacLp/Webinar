import { Component, OnInit } from '@angular/core';
import { EstudianteService } from '../services/estudiante.service';
import { Student } from '../interfaces/estudiante.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private EstudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.students = this.EstudianteService.getStudents();
  }
}
