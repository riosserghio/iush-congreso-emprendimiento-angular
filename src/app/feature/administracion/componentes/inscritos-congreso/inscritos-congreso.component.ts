import { Component, OnInit } from '@angular/core';
import { InscripcionCongreso } from '../../../../shared/interfaces/inscripcion-congreso.interface';
import { AdministracionCongresoServicio } from '../../servicios/administracion.servicio';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-inscritos-congreso',
  templateUrl: './inscritos-congreso.component.html',
  styleUrl: './inscritos-congreso.component.scss'
})
export class InscritosCongresoComponent implements OnInit {
  inscritosCongreso: InscripcionCongreso[] = [];
  inscritosCongresoPaginados: InscripcionCongreso[] = [];
  pagina: number = 1;
  tamanoPagina: number = 10;
  totalItems: number = 0;

  constructor(
    private administracionServicio: AdministracionCongresoServicio,
    private router: Router) {
  }
  ngOnInit(): void {
    this.obtenerInscritosCongreso();
  }

  async obtenerInscritosCongreso() {
    const respuestaInscritosCongreso = await lastValueFrom(this.administracionServicio.obtenerInscritosCongreso());
    this.inscritosCongreso = respuestaInscritosCongreso.data;
    this.totalItems = this.inscritosCongreso.length;
    this.actualizarPaginacion();
  }

  actualizarPaginacion() {
    const inicio = (this.pagina - 1) * this.tamanoPagina;
    const fin = inicio + this.tamanoPagina;
    this.inscritosCongresoPaginados = this.inscritosCongreso.slice(inicio, fin);
  }

  onCambioPagina(numeroPagina: number) {
    this.pagina = numeroPagina;
    this.actualizarPaginacion();
  }
  navegarRuta(ruta: string) {
    this.router.navigate([ruta]);
  }
  
}
