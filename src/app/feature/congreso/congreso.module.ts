import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroEmprendedorComponent } from './componentes/registro-emprendedor/registro-emprendedor.component';
import { InicioEmprendedorComponent } from './componentes/inicio-emprendedor/inicio-emprendedor.component';
import { CongresoRoutingModule } from './congreso-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RegistroCongresoComponent } from './componentes/registro-congreso/registro-congreso.component';
import { CongresoEmprendimientoServicio } from './servicios/congreso-emprendimiento.servicio';
import { PreguntasEmprendimientoComponent } from './componentes/preguntas-emprendimiento/preguntas-emprendimiento.component';
import { AceptacionTratamientoDatosComponent } from './componentes/aceptacion-tratamiento-datos/aceptacion-tratamiento-datos.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [InicioEmprendedorComponent,
    RegistroEmprendedorComponent,
    RegistroCongresoComponent,
    PreguntasEmprendimientoComponent,
    AceptacionTratamientoDatosComponent],
  imports: [
    CommonModule, CongresoRoutingModule, SharedModule, PdfViewerModule
  ],
  providers: [
    CongresoEmprendimientoServicio
  ]
})
export class CongresoModule { }
