import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { LoginComponent } from "./componentes/login/login.component";
import { AdministracionRoutingModule } from "./administracion-routing.module";
import { AdministracionCongresoServicio } from "./servicios/administracion.servicio";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule, SharedModule, AdministracionRoutingModule
    ],
    providers: [
        AdministracionCongresoServicio
    ]
})
export class AdministracionModule { }
