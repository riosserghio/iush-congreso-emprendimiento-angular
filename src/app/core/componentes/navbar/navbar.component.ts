import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasServicio } from '../../servicios/alertas.servicio';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  constructor(
    private readonly route: Router,
    private readonly alertaServicio: AlertasServicio
  ) {

  }

  navegarRuta() {
    this.alertaServicio.alertaOpcionesRegistro().then(opcionNavegacion => {
      if (opcionNavegacion !== undefined) {
        this.route.navigate([opcionNavegacion]);
      }
    });
  }
}
