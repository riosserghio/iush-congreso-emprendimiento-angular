import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  constructor(
    private readonly route: Router
  ) {

  }

  navegarRuta(ruta: string) {
    this.route.navigate([ruta]);
  }
}
