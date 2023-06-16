import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyectos.model';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  url = '/api/proyectos/';
  constructor(private http: HttpClient) {}

  cargarProyectos(): Observable<any> {
    return this.http.get(this.url);
  }

  cargarProyecto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  registrarProyecto(proyecto: Proyecto): Observable<any> {
    return this.http.post(this.url, proyecto);
  }

  actualizarProyecto(id: string, proyecto: Proyecto): Observable<any> {
    return this.http.put(this.url + id, proyecto);
  }

  eliminarProyecto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }
}
