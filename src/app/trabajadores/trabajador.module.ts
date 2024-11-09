import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TrabajadorFormComponent } from './components/trabajadores-form.component';
import { TrabajadorListComponent } from './pages/trabajador-list.component';

@NgModule({
  declarations: [
    TrabajadorFormComponent,
    TrabajadorListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TrabajadorFormComponent,
    TrabajadorListComponent
  ]
})
export class TrabajadorModule { }

