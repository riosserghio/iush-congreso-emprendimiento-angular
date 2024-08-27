import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { CongresoEmprendimientoServicio } from '../../servicios/congreso-emprendimiento.servicio';
import { Pais } from '../../../../shared/interfaces/pais';
import { Institucion } from '../../../../shared/interfaces/institucion';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-emprendedor',
  templateUrl: './registro-emprendedor.component.html',
  styleUrl: './registro-emprendedor.component.scss'
})

export class RegistroEmprendedorComponent implements OnInit {
  aceptaPoliticaDatosPersonales: boolean = false;
  pdfSrc = 'assets/terminos-condiciones/terminos-condiciones.pdf';

  paises: Pais[] = [];
  instituciones: Institucion[] = [];

  registroEmprendedorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private congresoEmprendimientoServicio: CongresoEmprendimientoServicio,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.registroEmprendedorForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      documentoIdentidad: ['', Validators.required],
      correoElectronicoPersonal: ['', [Validators.required, Validators.email]],
      correoElectronicoInstitucional: ['', [Validators.required, Validators.email]],
      numeroTelefono: ['', Validators.required],
      pais: ['', Validators.required],
      ciudadResidencia: ['', Validators.required],
      idIES: ['', Validators.required],
      programaAcademico: ['', Validators.required],
    });

    this.consultarPaises();
  }

  async consultarPaises() {
    const respuestaPaises = await lastValueFrom(this.congresoEmprendimientoServicio.obtenerPaises());
    this.paises = respuestaPaises.data;
  }

  registrarEmprendedor(): void {

    if (this.registroEmprendedorForm.invalid) {
      this.registroEmprendedorForm.markAllAsTouched();
      return;
    }

    if (this.registroEmprendedorForm.valid) {
      console.log('Formulario válido:', this.registroEmprendedorForm.value);
    }
  }

  async paisSeleccionado(evento: any) {
    this.instituciones = [];
    const idPais = evento.target.value;
    const respuestaInstituciones = await lastValueFrom(this.congresoEmprendimientoServicio.obtenerInstitucionesPorPais(idPais));
    this.instituciones = respuestaInstituciones.data;
  }

  navegarRuta(ruta: string) {
    this.router.navigate([ruta]);
  }

  aceptacionPoliticaDatosPersonales(): void {
    this.aceptaPoliticaDatosPersonales = !this.aceptaPoliticaDatosPersonales;
  }
}
