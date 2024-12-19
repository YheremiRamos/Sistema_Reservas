import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AppMaterialModule } from '../app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { MenuComponent } from '../menu/menu.component';
import Swal from 'sweetalert2';
import { Usuario } from '../models/usuario.model';
import { TokenService } from '../security/token.service';
@Component({
  selector: 'app-add-crear-eventos',
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent, ReactiveFormsModule, MatStepperModule],
  templateUrl: './add-crear-eventos.component.html',
  styleUrls: ['./add-crear-eventos.component.css']
})
export class AddCrearEventosComponent implements OnInit {
  isOrganizer: boolean = true; // Cambiar según el rol del usuario
  isParticipant: boolean = true; // Cambiar según el rol del usuario

  formCrearEvento!: FormGroup;
  filtroForm!: FormGroup;

  // Datos de ejemplo para los eventos
  misEventos = new MatTableDataSource<any>([
    { id: 1, titulo: 'Conferencia de Tecnología', descripcion: 'Una conferencia de innovación', ubicacion: 'Lima', capacidad: 100, fechaHora: '2024-12-20T10:00:00' }
  ]);
  eventosFiltrados = new MatTableDataSource<any>([
    { id: 2, titulo: 'Feria de Libros', ubicacion: 'Arequipa', fechaHora: '2024-12-15T14:00:00' }
  ]);

  displayedColumns: string[] = ['titulo', 'acciones'];
  displayedEventColumns: string[] = ['titulo', 'ubicacion', 'acciones'];


 objUsuario: Usuario = {};

  constructor(
    private tokenService: TokenService,
    private fb: FormBuilder
  ) {
    this.objUsuario.idUsuario = this.tokenService.getUserId();
  }


  ngOnInit(): void {
    // Formulario para crear eventos
    this.formCrearEvento = this.fb.group({
      idOrganizador: ['', Validators.required],
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descripcion: ['', [Validators.required, Validators.maxLength(500)]],
      ubicacion: ['', Validators.required],
      capacidadMaxima: [0, [Validators.required, Validators.min(1)]],
      fechaHora: ['', Validators.required],
      esPublico: [1, Validators.required],
      reservas: [0, [Validators.required, Validators.min(0)]]
    });

    // Formulario para filtrar eventos
    this.filtroForm = this.fb.group({
      ubicacion: [''],
      fecha: ['']
    });
  }

  // Crear un nuevo evento
  crearEvento(): void {
    if (this.formCrearEvento.invalid) {
      Swal.fire('Error', 'Por favor completa todos los campos correctamente', 'error');
      return;
    }

    const nuevoEvento = this.formCrearEvento.value;
    this.misEventos.data.push(nuevoEvento);
    this.misEventos._updateChangeSubscription();
    this.formCrearEvento.reset();
    Swal.fire('Éxito', 'Evento creado exitosamente', 'success');
  }
}
