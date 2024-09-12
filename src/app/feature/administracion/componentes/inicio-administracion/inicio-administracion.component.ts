import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-administracion',
  templateUrl: './inicio-administracion.component.html',
  styleUrl: './inicio-administracion.component.scss'
})
export class InicioAdministracionComponent {
  active = 'top';

  constructor(private route: Router) {
  }

  navegarRuta(ruta: string) {
    this.route.navigate([ruta]);
  }
}
