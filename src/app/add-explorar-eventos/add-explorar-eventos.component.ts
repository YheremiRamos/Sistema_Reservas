import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
import { EventoService } from '../services/evento.service';
import { MenuComponent } from "../menu/menu.component";
import { AppMaterialModule } from '../app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { Evento } from '../models/evento.model';
import { TokenService } from '../security/token.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-explorar-eventos',
  templateUrl: './add-explorar-eventos.component.html',
  styleUrls: ['./add-explorar-eventos.component.css'],
  standalone: true,
  imports: [AppMaterialModule, FormsModule, CommonModule, MenuComponent, ReactiveFormsModule, MatStepperModule],
})
export class ExplorarEventosComponent implements OnInit {
  misEventos: Evento[] = [];
  eventosFiltrados: Evento[] = [];
  isOrganizer = true; // Cambiar según el tipo de usuario
  isParticipant = false; // Cambiar según el tipo de usuario


  dataSource = new MatTableDataSource<any>(); 



  displayedColumns: string[] = [
    'idEvento',
    'idOrganizador',
    'titulo',
    'descripcion',
    'ubicacion',
    'capacidadMaxima',
    'fechaHora',
    'esPublico',
    'reservas'
  ];
  objUsuario: Usuario = {};

  constructor(
    private tokenService: TokenService,
    private eventoService: EventoService
  ) {
    this.objUsuario.idUsuario = this.tokenService.getUserId();
  }


  ngOnInit(): void {

    this.eventoService.listarEventos().subscribe({
      next: (data) => {
        const formattedData = data.map((item: any) => ({
          idEvento: item[0],
          idOrganizador: item[1],
          titulo: item[2],
          descripcion: item[3],
          fechaHora: new Date(item[4]),
          esPublico: item[5],
          reservas: item[6]
        }));
    
        // Ordena los datos por ID
        formattedData.sort((a, b) => a.idEvento - b.idEvento);
    
        this.dataSource.data = formattedData;
    
        console.log(this.dataSource);
      },
      error: (err) => {
        console.error('Error al cargar los datos:', err);
      },
    });
    

  }

  editarEvento(evento: Evento): void {
    // Lógica para editar evento
  }

  eliminarEvento(id: number): void {
    this.eventoService.eliminarEvento(id).subscribe(() => {
      this.misEventos = this.misEventos.filter(e => e.idEvento !== id);
    });
  }

  verDetalleEvento(evento: Evento): void {
    // Lógica para ver detalles del evento
  }

  registrarseEvento(evento: Evento): void {
    // Lógica para registrarse en el evento
  }
}
