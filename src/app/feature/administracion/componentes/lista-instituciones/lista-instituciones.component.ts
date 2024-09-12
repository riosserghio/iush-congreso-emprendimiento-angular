import { Component, OnInit } from '@angular/core';
import { AdministracionCongresoServicio } from '../../servicios/administracion.servicio';
import { Institucion } from '../../../../shared/interfaces/institucion.interface';
import { lastValueFrom } from 'rxjs';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-instituciones',
  standalone: true,
  imports: [NgbPaginationModule, CommonModule],
  templateUrl: './lista-instituciones.component.html',
  styleUrl: './lista-instituciones.component.scss'
})
export class ListaInstitucionesComponent implements OnInit {

  instituciones: Institucion[] = [];
  institucionesPaginadas: Institucion[] = [];
  pagina: number = 1;
  tamanoPagina: number = 10;
  totalItems: number = 0;

  constructor(private administracionServicio: AdministracionCongresoServicio) {
  }
  ngOnInit(): void {

    this.obtenerInstituciones();
  }

  async obtenerInstituciones() {
    const respuestaPaises = await lastValueFrom(this.administracionServicio.obtenerInstituciones());
    this.instituciones = respuestaPaises.data;
    this.totalItems = this.instituciones.length;

    this.actualizarPaginacionInstituciones();
  }

  actualizarPaginacionInstituciones() {
    const inicio = (this.pagina - 1) * this.tamanoPagina;
    const fin = inicio + this.tamanoPagina;
    this.institucionesPaginadas = this.instituciones.slice(inicio, fin);
  }

  onCambioPagina(numeroPagina: number) {
    this.pagina = numeroPagina;
    this.actualizarPaginacionInstituciones();
  }

}
