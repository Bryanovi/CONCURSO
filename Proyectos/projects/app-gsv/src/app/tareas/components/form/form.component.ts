import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  constructor() {}
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
}
