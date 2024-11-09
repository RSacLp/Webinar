
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrabajadorService } from '../services/trabajador.service';
import { Trabajador } from '../interface/trabajadores.interface';
import { TrabajadorFirebaseService } from '../services/trabajadorFirebase.service'; // Servicio Firebase


@Component({
  selector: 'app-trabajadores-form',
  templateUrl: './trabajadores-form.component.html',
  styleUrls: ['./trabajadores-from.component.css']
})
export class TrabajadorFormComponent {
  trabajadorForm: FormGroup;

  constructor(private fb: FormBuilder, private TrabajadorService: TrabajadorService,private TrabajadorFirebaseService:TrabajadorFirebaseService) {
    this.trabajadorForm = this.fb.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      dpi: ['', Validators.required],
      celular: ['', Validators.required],
      telefono: ['', Validators.required,],
      correo: ['', Validators.required],
      nit: ['', Validators.required],
      direccion: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.trabajadorForm.valid) {
      const newTrabajador: Trabajador = {
        id: Date.now(), // Se genera un ID único
        ...this.trabajadorForm.value
      };

      this.TrabajadorService.addTrabajador(newTrabajador);
      this.trabajadorForm.reset();
    }
  }

  saveToFirebase() {
    if (this.trabajadorForm.valid) {
      const newTrabajador: Trabajador = {
        id: Date.now(), // Genera un ID único
        ...this.trabajadorForm.value
      };

      // Llama al servicio para guardar en Firebase
      this.TrabajadorFirebaseService.addTrabajador(newTrabajador)
      this.trabajadorForm.reset(); // Limpia el formulario
    }
  }
}

