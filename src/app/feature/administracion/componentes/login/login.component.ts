import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministracionCongresoServicio } from '../../servicios/administracion.servicio';
import { AlertasServicio } from '../../../../core/servicios/alertas.servicio';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private administracionServicio: AdministracionCongresoServicio,
    private alertaServicio: AlertasServicio
  ) {
    this.loginForm = this.fb.group({
      perfil: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      documentoIdentidad: ['', [Validators.required]]
    });
  }

  iniciarSesion() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const perfil = this.loginForm.get('perfil')?.value;
    const correo = this.loginForm.get('correo')?.value;
    const documentoIdentidad = this.loginForm.get('documentoIdentidad')?.value;
    let loginUrl = '';
    if (perfil === 'Administrador') {
      loginUrl = 'administrador/loginAdministrador'
    } else if (perfil === 'Evaluador') {
      loginUrl = 'evaluador/loginEvaluador'
    }

    this.administracionServicio.iniciarSesion(correo, documentoIdentidad, loginUrl).subscribe((loginResultado) => {

      if (loginResultado.data) {
        console.log('login exitoso')
      } else {
        this.alertaServicio.alertaError(
          {
            titulo: 'Administración',
            texto: 'Ocurrió un error inesperado tratando de autenticar al usuario',
            redireccionar: true,
            urlRedireccion: '/'
          }
        )
      }
    });
  }

  navegarRuta(ruta: string) {
    this.router.navigate([ruta]);
  }
}
