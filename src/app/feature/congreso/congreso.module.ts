import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroEmprendedorComponent } from './componentes/registro-emprendedor/registro-emprendedor.component';
import { InicioEmprendedorComponent } from './componentes/inicio-emprendedor/inicio-emprendedor.component';
import { CongresoRoutingModule } from './congreso-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RegistroCongresoComponent } from './componentes/registro-congreso/registro-congreso.component';
import { CongresoEmprendimientoServicio } from './servicios/congreso-emprendimiento.servicio';

@NgModule({
  declarations: [InicioEmprendedorComponent, RegistroEmprendedorComponent, RegistroCongresoComponent],
  imports: [
    CommonModule, CongresoRoutingModule, SharedModule
  ],
  providers: [
    CongresoEmprendimientoServicio
  ]
})
export class CongresoModule { }
