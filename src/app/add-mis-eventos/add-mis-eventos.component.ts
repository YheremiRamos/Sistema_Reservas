import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AppMaterialModule } from '../app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MenuComponent } from '../menu/menu.component';
import Swal from 'sweetalert2';
import { TokenService } from '../security/token.service';
import { Usuario } from '../models/usuario.model';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-add-mis-eventos',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent, ReactiveFormsModule, MatStepperModule],
  templateUrl: './add-mis-eventos.component.html',
  styleUrl: './add-mis-eventos.component.css'
})
export class AddMisEventosComponent {
  isOrganizer: boolean = true; // Cambiar según el rol del usuario
  isParticipant: boolean = true; // Cambiar según el rol del usuario

  eventoForm!: FormGroup;
  filtroForm!: FormGroup;
  displayedColumns: string[] = ['titulo', 'acciones'];
  displayedEventColumns: string[] = ['titulo', 'ubicacion', 'acciones'];

 objUsuario: Usuario = {};

  constructor(
    private tokenService: TokenService,
    private fb: FormBuilder,
        private eventoService: EventoService
    
  ) {
    this.objUsuario.idUsuario = this.tokenService.getUserId();
  }
  ngOnInit(): void {


  }




}
