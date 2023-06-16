import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tareas.model';

@Injectable({
  providedIn: 'root',
})
export class TareasService {
  url = '/api/tareas/';
  constructor(private http: HttpClient) {}

  cargarTareas(): Observable<any> {
    return this.http.get(this.url);
  }

  cargarTarea(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  registrarTarea(tarea: Tarea): Observable<any> {
    return this.http.post(this.url, tarea);
  }

  actualizarTarea(id: string, tarea: Tarea): Observable<any> {
    return this.http.put(this.url + id, Tarea);
  }

  eliminarTarea(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
