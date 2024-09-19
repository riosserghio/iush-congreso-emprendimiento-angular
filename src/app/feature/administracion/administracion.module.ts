import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { LoginComponent } from "./componentes/login/login.component";
import { AdministracionRoutingModule } from "./administracion-routing.module";
import { AdministracionCongresoServicio } from "./servicios/administracion.servicio";
import { RegistroInstitucionComponent } from "./componentes/registro-institucion/registro-institucion.component";
import { ListaEmprendimientosComponent } from "./componentes/lista-emprendimientos/lista-emprendimientos.component";
import { NgbModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { RegistroEvaluadorComponent } from "./componentes/registro-evaluador/registro-evaluador.component";
import { ListaEvaluadoresComponent } from "./componentes/lista-evaluadores/lista-evaluadores.component";
import { AsignarEmprendimientoEvaluadorComponent } from "./componentes/asignar-emprendimiento-evaluador/asignar-emprendimiento-evaluador.component";
import { InscritosCongresoComponent } from "./componentes/inscritos-congreso/inscritos-congreso.component";

@NgModule({
    declarations: [
        LoginComponent,
        RegistroInstitucionComponent,
        ListaEmprendimientosComponent,
        RegistroEvaluadorComponent,
        ListaEvaluadoresComponent,
        AsignarEmprendimientoEvaluadorComponent,
        InscritosCongresoComponent],
    imports: [
        CommonModule,
        SharedModule,
        AdministracionRoutingModule,
        NgbModule,
        NgbPaginationModule,

    ],
    providers: [
        AdministracionCongresoServicio
    ]
})
export class AdministracionModule { }
