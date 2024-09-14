import { Component, OnInit } from '@angular/core';
import { Evaluador } from '../../../../shared/interfaces/evaluador.interface';
import { AdministracionCongresoServicio } from '../../servicios/administracion.servicio';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-evaluadores',
  templateUrl: './lista-evaluadores.component.html',
  styleUrl: './lista-evaluadores.component.scss'
})
export class ListaEvaluadoresComponent implements OnInit {

  evaluadores: Evaluador[] = [];
  evaluadoresPaginados: Evaluador[] = [];
  pagina: number = 1;
  tamanoPagina: number = 10;
  totalItems: number = 0;

  constructor(
    private administracionServicio: AdministracionCongresoServicio,
    private router: Router) {

  }

  ngOnInit(): void {

    this.obtenerEvaluadores();
  }

  async obtenerEvaluadores() {
    const respuestaEvaluadores = await lastValueFrom(this.administracionServicio.obtenerEvaluadores());
    this.evaluadores = respuestaEvaluadores.data;
    this.totalItems = this.evaluadores.length;
    this.actualizarPaginacion();
  }

  onCambioPagina(numeroPagina: number) {
    this.pagina = numeroPagina;
    this.actualizarPaginacion();
  }

  actualizarPaginacion() {
    const inicio = (this.pagina - 1) * this.tamanoPagina;
    const fin = inicio + this.tamanoPagina;
    this.evaluadoresPaginados = this.evaluadores.slice(inicio, fin);
  }

  navegarRuta(ruta: string) {
    this.router.navigate([ruta]);
  }
}
