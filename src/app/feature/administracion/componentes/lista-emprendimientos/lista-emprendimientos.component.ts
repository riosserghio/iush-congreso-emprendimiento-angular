import { Component, OnInit } from '@angular/core';
import { Emprendimiento } from '../../../../shared/interfaces/emprendimiento.interface';
import { AdministracionCongresoServicio } from '../../servicios/administracion.servicio';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-emprendimientos',
  templateUrl: './lista-emprendimientos.component.html',
  styleUrl: './lista-emprendimientos.component.scss'
})
export class ListaEmprendimientosComponent implements OnInit {
  emprendimientos: Emprendimiento[] = [];
  emprendimientosPaginados: Emprendimiento[] = [];
  pagina: number = 1;
  tamanoPagina: number = 10;
  totalItems: number = 0;

  constructor(
    private administracionServicio: AdministracionCongresoServicio,
    private router: Router) {
  }
  ngOnInit(): void {
    this.obtenerEmprendimientos();
  }

  async obtenerEmprendimientos() {
    const respuestaEmprendimientos = await lastValueFrom(this.administracionServicio.obtenerEmprendimientos());
    this.emprendimientos = respuestaEmprendimientos.data;
    this.totalItems = this.emprendimientos.length;
    this.actualizarPaginacion();
  }

  actualizarPaginacion() {
    const inicio = (this.pagina - 1) * this.tamanoPagina;
    const fin = inicio + this.tamanoPagina;
    this.emprendimientosPaginados = this.emprendimientos.slice(inicio, fin);
  }

  onCambioPagina(numeroPagina: number) {
    this.pagina = numeroPagina;
    this.actualizarPaginacion();
  }
  navegarRuta(ruta: string) {
    this.router.navigate([ruta]);
  }
}
