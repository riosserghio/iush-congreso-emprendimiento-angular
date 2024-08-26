import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-congreso',
  templateUrl: './registro-congreso.component.html',
  styleUrl: './registro-congreso.component.scss'
})
export class RegistroCongresoComponent {
  registroCongresoForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registroCongresoForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: [''],
      pais: ['', Validators.required],
      ciudad: ['', Validators.required],
      organizacion: [''],
      tipoAsistente: ['', Validators.required],
      otroAsistente: ['']
    });

    this.registroCongresoForm.get('tipoAsistente')?.valueChanges.subscribe(value => {
      const otroAsistenteControl = this.registroCongresoForm.get('otroAsistente');
      if (value === 'Otro') {
        otroAsistenteControl?.setValidators(Validators.required);
      } else {
        otroAsistenteControl?.clearValidators();
      }
      otroAsistenteControl?.updateValueAndValidity();
    });
  }

  onSubmit(): void {
    if (this.registroCongresoForm.valid) {
      console.log('Formulario válido:', this.registroCongresoForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }
}
