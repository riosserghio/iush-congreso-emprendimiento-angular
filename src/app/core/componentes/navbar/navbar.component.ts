import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasServicio } from '../../servicios/alertas.servicio';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AceptacionTratamientoDatosComponent } from '../../../feature/congreso/componentes/aceptacion-tratamiento-datos/aceptacion-tratamiento-datos.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  constructor(
    private readonly route: Router,
    private readonly alertaServicio: AlertasServicio,
    private modalService: NgbModal
  ) {

  }

  navegarRuta(ruta: string) {
    if (ruta.length > 0) {
      this.route.navigate(['/administracion/login']);
    } 
  }

  abrirModalAceptacionTratamientoDatos() {
    this.modalService.open(AceptacionTratamientoDatosComponent, { size: 'lg', centered: true });
  }
}
