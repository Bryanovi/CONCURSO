export class Producto {
  _id?: string;
  nombre?: string;
  descripcion?: string;
  fechaInicio?: Date;
  fechaFin?: Date;
  responsable?: String;

  constructor(nombre?: string, descripcion?: string, fechaInicio?: Date,fechaFin?: Date, responsable?:String) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.responsable = responsable;

  }
}
