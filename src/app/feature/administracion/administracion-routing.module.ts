import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./componentes/login/login.component";
import { NgModule } from "@angular/core";
import { InicioAdministracionComponent } from "./componentes/inicio-administracion/inicio-administracion.component";
import { AuthGuard } from "../../core/Guards/auth.guard";
import { RegistroInstitucionComponent } from "./componentes/registro-institucion/registro-institucion.component";
import { ListaInstitucionesComponent } from "./componentes/lista-instituciones/lista-instituciones.component";
import { ListaEmprendimientosComponent } from "./componentes/lista-emprendimientos/lista-emprendimientos.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'opciones',
        canActivate: [AuthGuard],
        component: InicioAdministracionComponent
    },
    {
        path: 'opciones/registro-institucion',
        canActivate: [AuthGuard],
        component: RegistroInstitucionComponent
    },
    {
        path: 'opciones/lista-instituciones',
        canActivate: [AuthGuard],
        component: ListaInstitucionesComponent
    },
    {
        path: 'opciones/lista-emprendimientos',
        canActivate: [AuthGuard],
        component: ListaEmprendimientosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdministracionRoutingModule { }  