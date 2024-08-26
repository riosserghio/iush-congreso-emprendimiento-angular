import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { CongresoEmprendimientoServicio } from '../../servicios/congreso-emprendimiento.servicio';

@Component({
  selector: 'app-registro-emprendedor',
  templateUrl: './registro-emprendedor.component.html',
  styleUrl: './registro-emprendedor.component.scss'
})

export class RegistroEmprendedorComponent implements OnInit {
  paises: string[] = [];
  registroEmprendedorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private congresoEmprendimientoServicio: CongresoEmprendimientoServicio) { }

  ngOnInit(): void {
    this.registroEmprendedorForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      documentoIdentidad: ['', Validators.required],
      correoElectronicoPersonal: ['', [Validators.required, Validators.email]],
      correoElectronicoInstitucional: ['', [Validators.required, Validators.email]],
      numeroTelefono: ['', Validators.required],
    });

    this.consultarPaises();
  }

  async consultarPaises() {

    const paises = await lastValueFrom(this.congresoEmprendimientoServicio.obtenerPaises());
    console.log(paises);
  }

  onSubmit(): void {
    if (this.registroEmprendedorForm.valid) {
      console.log('Formulario válido:', this.registroEmprendedorForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
