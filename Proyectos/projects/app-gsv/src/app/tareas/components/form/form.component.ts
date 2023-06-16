import { Component, EventEmitter, Input, Output, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'gsv-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  titulo = '';

  formulario!: FormGroup;

  @Input() data!: any;
  @Output() formularioEnviado: EventEmitter<any> = new EventEmitter();
  @Output() formularioCerrado: EventEmitter<void> = new EventEmitter<void>();

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    console.log(this.data);
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formulario = new FormGroup({
      id: new FormControl(this.data?._id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      descripcion: new FormControl(this.data?.descripcion, Validators.required),
      fechaInicio: new FormControl(this.data?.fechaInicio, Validators.required),
      fechaFin: new FormControl(this.data?.fechaFin, Validators.required),
      estado: new FormControl(this.data?.estado, Validators.required),
    });
  }

  grabar() {
    if (this.formulario.valid) {
      const formData = this.formulario.value;
      console.log(formData);
      this.formularioEnviado.emit(formData);
    }
  }

  cerrarFormulario() {
    this.formularioCerrado.emit();
  }

  setEstadoColor(estado: string) {
    const estadoElement = this.el.nativeElement.querySelector('#estado');

    // Eliminar clases CSS existentes
    this.renderer.removeClass(estadoElement, 'estado-celeste');
    this.renderer.removeClass(estadoElement, 'estado-naranja');
    this.renderer.removeClass(estadoElement, 'estado-verde-claro');

    // Agregar la clase CSS correspondiente al estado seleccionado
    if (estado === 'pendiente') {
      this.renderer.addClass(estadoElement, 'estado-celeste');
    } else if (estado === 'progreso') {
      this.renderer.addClass(estadoElement, 'estado-naranja');
    } else if (estado === 'completado') {
      this.renderer.addClass(estadoElement, 'estado-verde-claro');
    }
  }
}
