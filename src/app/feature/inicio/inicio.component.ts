import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasServicio } from '../../core/servicios/alertas.servicio';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  constructor(
    private readonly router: Router,
    private readonly alertaServicio: AlertasServicio
  ) {

  }

  navegarRuta() {
    this.alertaServicio.alertaOpcionesRegistro().then(opcionNavegacion => {
      if (opcionNavegacion !== undefined) {
        this.router.navigate([opcionNavegacion]);
      }
    });
  }
}
