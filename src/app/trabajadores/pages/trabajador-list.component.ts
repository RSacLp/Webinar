import { Component, OnInit } from '@angular/core';
import { TrabajadorService } from '../services/trabajador.service';
import { Trabajador } from '../interface/trabajadores.interface';

@Component({
  selector: 'app-trabajador-list',
  templateUrl: './trabajador-list.component.html',
  styleUrls: ['./trabajador-list.component.css']
})
export class TrabajadorListComponent implements OnInit {
  trabajador: Trabajador[] = [];

  constructor(private TrabajadorService: TrabajadorService) {}

  ngOnInit(): void {
    this.trabajador = this.TrabajadorService.getTrabajador();
  }
}
