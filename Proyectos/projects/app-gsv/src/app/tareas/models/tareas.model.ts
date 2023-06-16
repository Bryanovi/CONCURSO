export class Tarea {
  _id?: string;
  nombre?: string;
  descripcion?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  estado?: String;

  constructor(nombre?: string, descripcion?: string, fechaInicio?: Date,fechaFin?: Date, estado?:String) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.estado = estado;

  }
}
