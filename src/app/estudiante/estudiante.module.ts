import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './components/estudiante-form/estudiante-form.component';
import { StudentListComponent } from './pages/estudiante-list.component';

@NgModule({
  declarations: [
    StudentFormComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentFormComponent,
    StudentListComponent
  ]
})
export class EstudianteModule { }

