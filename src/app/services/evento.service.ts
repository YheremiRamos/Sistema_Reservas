import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from '../app.settings';
import { Evento } from '../models/evento.model';
import { Reserva } from '../models/reserva.model';

const baseUrl = AppSettings.API_ENDPOINT_V + '/organizador';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  constructor(private http: HttpClient) {}

  // 1) Crear evento
  crearEvento(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(`${baseUrl}/evento`, evento);
  }

  // 2) Editar evento
  editarEvento(idEvento: number, evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(`${baseUrl}/evento/${idEvento}`, evento);
  }

  // 3) Eliminar evento
  eliminarEvento(idEvento: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}/evento/${idEvento}`);
  }

  // 4) Consultar asistentes de un evento
  consultarAsistentes(idEvento: number): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(`${baseUrl}/evento/${idEvento}/asistentes`);
  }

  // 5) Listar eventos (todos los eventos disponibles)
  listarEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${baseUrl}/listarEventos`);
  }

  

  // 6) Listar eventos públicos (participante)
  listarEventosPublicos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${baseUrl}/listarEventosPublicos`);
  }
}
