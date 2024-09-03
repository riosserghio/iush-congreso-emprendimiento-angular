import { RouterModule, Routes } from "@angular/router";
import { InicioEmprendedorComponent } from "./componentes/inicio-emprendedor/inicio-emprendedor.component";
import { NgModule } from "@angular/core";
import { RegistroEmprendedorComponent } from "./componentes/registro-emprendedor/registro-emprendedor.component";
import { RegistroCongresoComponent } from "./componentes/registro-congreso/registro-congreso.component";

const routes: Routes = [
    {
        path: '',
        component: InicioEmprendedorComponent
    },
    {
        path: 'registro-emprendedor',
        component: RegistroEmprendedorComponent
    },
    {
        path: 'inscripcion',
        component: RegistroCongresoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CongresoRoutingModule { }  