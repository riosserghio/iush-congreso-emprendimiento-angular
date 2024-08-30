import { Component, Input, input, OnInit } from '@angular/core';
import { Emprendedor } from '../../../../shared/interfaces/emprendedor.interface';
import { CongresoEmprendimientoServicio } from '../../servicios/congreso-emprendimiento.servicio';
import { AlertasServicio } from '../../../../core/servicios/alertas.servicio';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { PreguntaEmprendimiento } from '../../../../shared/interfaces/pregunta-emprendimiento.interface';

@Component({
  selector: 'app-preguntas-emprendimiento',
  templateUrl: './preguntas-emprendimiento.component.html',
  styleUrl: './preguntas-emprendimiento.component.scss'
})
export class PreguntasEmprendimientoComponent implements OnInit {
  @Input() emprendedorCreado?: Emprendedor;
  registroPreguntasEmprendedorForm!: FormGroup;
  preguntas: any[] = [];
  respuestas: { [key: string]: boolean | null } = {}
  formularioEnviado = false;

  constructor(
    private congresoEmprendimientoServicio: CongresoEmprendimientoServicio,
    private alertaservicio: AlertasServicio,
    private readonly router: Router,
    private fb: FormBuilder
  ) {

  }
  ngOnInit(): void {

    this.registroPreguntasEmprendedorForm = this.fb.group({
      descripcionIdea: ['', Validators.required],
      propuestaSolucion: ['', Validators.required],
      fecha: [null, Validators.required],
    });

    this.consultarPreguntas();
  }

  registrarPreguntasEmprendedor(): void {
    this.formularioEnviado = true;

    const todasRespondidas = this.preguntas.every(
      pregunta => this.respuestas[pregunta._id] !== null
    );

    if (todasRespondidas) {
      const respuestasParaGuardar = this.preguntas.map(pregunta => ({
        _id: pregunta._id,
        respuesta: this.respuestas[pregunta._id],
      }));

      console.log(respuestasParaGuardar);
    } else {
      console.log('Por favor responde todas las preguntas.');
    }

    if (this.registroPreguntasEmprendedorForm.invalid) {
      this.registroPreguntasEmprendedorForm.markAllAsTouched();
      return;
    }

    if (this.registroPreguntasEmprendedorForm.valid) {

      const respuestasParaGuardar = this.preguntas.map(pregunta => ({
        _id: pregunta._id,
        respuesta: this.respuestas[pregunta._id],
      }));

      console.log(respuestasParaGuardar);


    }
  }

  navegarRuta(ruta: string) {
    this.router.navigate([ruta]);
  }

  async consultarPreguntas() {
    const respuestaPreguntas = await lastValueFrom(this.congresoEmprendimientoServicio.obtenerPreguntas());
    respuestaPreguntas.data.sort((a, b) => a.numero - b.numero);

    this.preguntas = respuestaPreguntas.data;

    this.preguntas.forEach(pregunta => {
      this.respuestas[pregunta._id] = null;
    });

  }

  obtenerFilas(): any[][] {
    const filas: any[][] = [];
    for (let i = 0; i < this.preguntas.length; i += 3) {
      filas.push(this.preguntas.slice(i, i + 3));
    }
    return filas;
  }

}
