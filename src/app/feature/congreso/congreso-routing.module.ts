import { RouterModule, Routes } from "@angular/router";
import { InicioEmprendedorComponent } from "./componentes/inicio-emprendedor/inicio-emprendedor.component";
import { NgModule } from "@angular/core";
import { RegistroEmprendedorComponent } from "./componentes/registro-emprendedor/registro-emprendedor.component";

const routes: Routes = [
    {
        path: '',
        component: InicioEmprendedorComponent
    },
    {
        path: 'registro-emprendedor',
        component: RegistroEmprendedorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CongresoRoutingModule { }  