import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

  constructor(
    private readonly router: Router
  ) {

  }

  navegarRuta(ruta: string) {
    this.router.navigate([ruta]);
  }
}
