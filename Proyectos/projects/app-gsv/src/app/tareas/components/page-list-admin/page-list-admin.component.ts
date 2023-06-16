import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { environment } from '../../../environments/environment';
import { KeypadButton } from '../../../shared/interfaces/keypadButton.interface';
import { MetaDataColumn } from '../../../shared/interfaces/metadatacolumn.interface';
import { TareasService } from '../../services/tarea.service';

@Component({
  selector: 'gsv-page-list-admin',
  templateUrl: './page-list-admin.component.html',
  styleUrls: ['./page-list-admin.component.css'],
})
export class PageListAdminComponent {
  registros: any[] = [
  ];
  title: string = 'CLIENTES';
  // El formulario es para poder abrir o cerrar el componente form
  formulario!: boolean;

  fila!: any;

  metaDataColumns: MetaDataColumn[] = [
    { field: '_id', title: 'ID' },
    { field: 'nombre', title: 'NOMBRE PROYECTO' },
    { field: 'descripcion', title: 'DESCRIPCION' },
    { field: 'fechaInicio', title: 'FECHA INICIO' },
    { field: 'fechaFin', title: 'FECHA FIN' },
    { field: 'estado', title: 'ESTADO' },
  ];

  keypadButtons: KeypadButton[] = [
    { icon: 'fa-solid fa-plus', color: 'btn-primary', accion: 'NUEVO' },
  ];

  data: any[] = [];
  totalRegistros = this.data.length;

  constructor(private productoService: TareasService) {
    this.cargarDocumento('');
  }

  cargarDocumento(buscar: string) {
    /* this.data = this.registros;
    this.totalRegistros = this.data.length;
    this.changePage(0);*/

    this.productoService.cargarTareas().subscribe((dataWeb) => {
      this.registros = dataWeb;
      if (buscar) {
        console.log(buscar);
        this.registros = this.registros.filter((registro) =>
          registro.nombresCompletos.toLowerCase().includes(buscar.toLowerCase())
        );
        console.log(this.registros);
      }
      this.totalRegistros = this.registros.length;
      this.changePage(0);
    });
  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const salto = pageSize * page;
    this.data = this.registros.slice(salto, salto + pageSize);
  }

  enviarAccion(accion: string) {
    switch (accion) {
      case 'DOWNLOAD':
        break;
      case 'NUEVO':
        this.formulario = true;
        this.abrirFormulario();
        break;
    }
  }

  accionEditar(row: any) {
    this.formulario = true;
    this.abrirFormulario(row);
  }

  accionEliminar(id: any) {
    console.log('Entro a pagelis');
    this.productoService.eliminarTarea(id).subscribe(() => {
      this.cargarDocumento('');
    });
  }

  grabarFormulario(formData: any) {
    if (!formData) {
      this.formulario = false;
      return;
    }
    if (formData.id) {
      const proyecto = { ...formData };
      console.log('Entro al ID');
      console.log(proyecto);
      this.productoService
        .actualizarTarea(formData.id, proyecto)
        .subscribe(() => {
          this.cargarDocumento('');
          this.formulario = false;
          this.mostrarMensajeActualizacion();
        });
    } else {
      const proyecto = { ...formData };
      this.productoService.registrarTarea(proyecto).subscribe(() => {
        console.log('Dentro registrar');
        console.log(proyecto);
        this.cargarDocumento('');
        this.formulario = false;
        this.mostrarMensajeAñadir();
      });
    }
  }

  abrirFormulario(fila: any = null) {
    this.fila = fila;
  }

  cerrarFormulario() {
    this.formulario = false;
  }

  mostrarMensajeActualizacion(): void {
    Swal.fire({
      title: 'Tarea actualizado',
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,
    });
  }

  mostrarMensajeAñadir(): void {
    Swal.fire({
      title: 'Tarea añadida',
      icon: 'info',
      timer: 3000,
      showConfirmButton: false,
    });
  }
}
