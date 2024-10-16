import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasServicio } from '../../core/servicios/alertas.servicio';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AceptacionTratamientoDatosComponent } from '../congreso/componentes/aceptacion-tratamiento-datos/aceptacion-tratamiento-datos.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  aceptaPoliticaDatosPersonales: boolean = false;
  pdfSrc = 'assets/terminos-condiciones/autorizacion-datos.pdf';
  constructor(
    private readonly router: Router,
    private readonly alertaServicio: AlertasServicio,
    private modalService: NgbModal

  ) {

  }

  navegarRuta(ruta: string) {
    this.alertaServicio.alertaOpcionesRegistro().then(opcionNavegacion => {
      if (opcionNavegacion !== undefined) {
        this.router.navigate([opcionNavegacion]);
      }
    });
  }


  abrirModalAceptacionTratamientoDatos() {
    this.modalService.open(AceptacionTratamientoDatosComponent, { size: 'lg', centered: true });
  }
}
